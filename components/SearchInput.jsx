"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(searchParams.get("search") || "");

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        router.push(`/news?${params.toString()}`);
    }, [value]);

    return (
        <TextField
            type="text"
            name="search"
            label="Search by username"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
        />
    );
}
