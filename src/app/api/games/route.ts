import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  body: string;
  token: string | null;
}

const API_PATH = "https://api.igdb.com/v4";

export async function POST(req: NextRequest) {
  try {
    const params: Params = await req.json();

    const { body, token } = params;

    const config = {
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.API_CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`${API_PATH}/games`, body, config);

    return NextResponse.json({ data });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          message: error.response?.data,
        },
        { status: error.response?.status }
      );
    }
    return NextResponse.json(
      {
        message: "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
