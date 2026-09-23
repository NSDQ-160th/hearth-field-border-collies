import { NextResponse } from "next/server";
import {
  householdTypes,
  NO_PREFERENCE,
  puppies,
  site,
} from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not read that note." },
      { status: 400 },
    );
  }

  if (text(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(body.name);
  const email = text(body.email);
  const phone = text(body.phone);
  const puppyId = text(body.puppy);
  const household = text(body.household);
  const experience = text(body.experience);
  const message = text(body.message);

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Name and a valid email are required." },
      { status: 400 },
    );
  }

  const puppy = puppies.find((item) => item.id === puppyId);
  const puppyLabel =
    puppy?.name ??
    (puppyId === NO_PREFERENCE
      ? "No preference / just saying hello"
      : "Not specified");
  const householdLabel =
    householdTypes.find((item) => item.value === household)?.label ??
    "Not specified";

  let delivered = false;
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${site.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Not given",
          puppy: puppyLabel,
          household: householdLabel,
          experience: experience || "Not given",
          message: message || "No extra message",
          _subject: `Puppy note from ${name} — ${puppyLabel}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      },
    );
    const result = (await response.json()) as { success?: string };
    delivered = response.ok && result.success === "true";
  } catch {
    delivered = false;
  }

  if (!delivered) {
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send that note. Email ${site.email} directly.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
