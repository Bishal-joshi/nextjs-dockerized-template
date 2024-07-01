"use client";
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  console.log(process.env.NEXT_PUBLIC_SECRET_KEY);

  return <div>Hello world</div>;
}
