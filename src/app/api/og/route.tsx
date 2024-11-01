/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "Game Title";
    const image =
      searchParams.get("img") || "https://aerolab.vercel.app/default-cover.jpg";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 0, 174, 0.16), #ffffff)",
            width: "100%",
            height: "100%",
            padding: "20px",
            paddingRight: "210px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage:
                "url('https://aerolab.vercel.app/background/keys-big.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              width: "100%",
              maxWidth: "90%",
            }}
          >
            <img
              width="260"
              height="350"
              src={image}
              style={{
                borderRadius: 8,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1
                style={{
                  fontSize: 50,
                  fontWeight: 600,
                  color: "#3c1661",
                }}
              >
                {title}
              </h1>

              <h2
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#6727a6",
                }}
              >
                Gaming Haven Z (Aerolab challenge)
              </h2>

              <h3
                style={{
                  fontSize: 35,
                  fontWeight: "bold",
                  color: "#3a3a3a",
                }}
              >
                by Facundo Ortiz
              </h3>
            </div>
          </div>
        </div>
      )
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to generate OG image", error },
      { status: 500 }
    );
  }
};
