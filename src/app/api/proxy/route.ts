import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzZZtC_Ehz1FtVMiiE6D4U6fX_sEHaYLSLTRpAwi9d5Qdsyd71txYA2tz1-CuxHGdU/exec";

  const fullUrl = `${scriptUrl}?${searchParams.toString()}`;

  console.log("[Proxy] →", fullUrl);

  try {
    const res = await fetch(fullUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
      redirect: "follow",
    });

    const text = await res.text();

    console.log("[Proxy] Status:", res.status);
    console.log("[Proxy] Body preview:", text.substring(0, 200));

    if (!res.ok) {
      return NextResponse.json(
        { status: "error", message: "Google Script error", raw: text },
        { status: 500 }
      );
    }

    try {
      const data = JSON.parse(text) as unknown;
      return NextResponse.json(data);
    } catch {
      return NextResponse.json(
        {
          status: "error",
          message: "Script did not return JSON",
          raw: text.substring(0, 300),
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";

    console.error("[Proxy] Crash:", message);

    return NextResponse.json(
      { status: "error", message },
      { status: 500 }
    );
  }
}
