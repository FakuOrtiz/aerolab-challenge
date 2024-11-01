import { ApiToken } from "@/app/api/token/token.model";
import axios from "axios";
import { NextResponse } from "next/server";

const API_PATH = "https://id.twitch.tv/oauth2/token";
const clientId = process.env.API_CLIENT_ID;
const secret = process.env.API_CLIENT_SECRET;

export async function GET() {
  try {
    const { data } = await axios.post<ApiToken>(
      `${API_PATH}?client_id=${clientId}&client_secret=${secret}&grant_type=client_credentials`
    );

    return NextResponse.json({ token: data.access_token });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.data },
        { status: 400 }
      );
    }
  }
}
