import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("Received request to /api/user");
    try {
        const body = await req.json();

        // Validate the input
        if (!body.username || !body.password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
        }

        // Simulating user authentication or storing credentials
        // In a real-world scenario, you would interact with a database here
        return NextResponse.json({ message: "User received", user: { username: body.username } });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 500 });
    }
}