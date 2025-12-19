"use client";

import { useState } from "react";
import { useConvert } from "@/hooks/useConvert";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("mm");
  const [toUnit, setToUnit] = useState<string>("cm");
  const [result, convert] = useConvert() as [number, (val: number, unit1: string, unit2: string) => void];

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      convert(numValue, fromUnit, toUnit);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="w-full max-w-lg px-8">
        <div className="flex flex-col gap-8">
          {/* Input Field */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold text-black">
              Enter the length to convert
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-2xl border-4 border-black px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder=""
            />
          </div>

          {/* From Unit Dropdown */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold text-black">
              Unit to Convert from
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full rounded-2xl border-4 border-black px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>

          {/* To Unit Dropdown */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold text-black">
              Unit to Convert to
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full rounded-2xl border-4 border-black px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="w-fit rounded-2xl border-4 border-black bg-white px-12 py-4 text-2xl font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Convert
          </button>

          {/* Result Display */}
          {result !== null && (
            <div className="mt-4 text-2xl font-semibold text-black">
              Result: {result} {toUnit}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
