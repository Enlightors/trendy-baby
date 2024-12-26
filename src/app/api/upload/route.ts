import { NextRequest, NextResponse } from "next/server";
import Upload from "@/lib/upload";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert File to Express.Multer.File format
    const buffer = Buffer.from(await file.arrayBuffer());
    const multerFile = {
      buffer,
      mimetype: file.type,
      originalname: file.name,
      size: file.size,
    } as Express.Multer.File;

    // Generate a unique filename
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name.replace(/\s+/g, "-")}`;

    // Upload to S3
    const imageUrl = await Upload("storage", multerFile, fileName);

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
