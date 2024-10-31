import { apiClientId } from "@/constants/env";
import { ApiToken } from "@/app/api/token/token.model";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await axios.post<ApiToken>(
      `${process.env.AUTH_PATH}?client_id=${apiClientId}&client_secret=${process.env.API_CLIENT_SECRET}&grant_type=client_credentials`
    );

    return NextResponse.json({ token: data.access_token });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json({ message: error.response?.data });
    }
  }
}
