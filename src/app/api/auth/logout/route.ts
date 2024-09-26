import authApiRequest from "@/apiRequest/auth";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export const dynamic = 'force-static'

export async function POST(request: Request) {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken')

    if (!sessionToken) {
        return Response.json({ message: "Không nhận được sessionToken" }, {
            status: 400
        })
    }
    try {
        const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value)
        return Response.json(result.payload.message, {
            status: 200,
            headers: {
                'Set-Cookie': `sessionToken=; Path=/; HTTPOnly`
            }
        })
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status
            })
        } else {
            return Response.json(
                {
                    message: 'Lỗi không xác định'
                },
                {
                    status: 500
                }
            )
        }
    }
}

