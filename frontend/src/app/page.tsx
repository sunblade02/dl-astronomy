"use client"

import { Prediction } from "@/components/shared/prediction";
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [init, setInit] = useState(true);
    const [title, setTitle] = useState<string | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [proba, setProba] = useState<number | null>(null);
    const [className, setClassName] = useState<string | null>(null);

    const loadPicture = async (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setInit(false);

        const files = e.target.files;
        if (!files || files.length === 0) {
            return;
        }

        const file = files[0];

        setTitle(file.name);

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API_URL}/predict`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        setProba(data.proba);
        setClassName(data.class_name);
        setIsLoading(false);

        e.target.value = "";
    };

    return (
        <div className="flex">
            <div className="w-1/2">
                <Field className="w-100 m-auto">
                    <FieldLabel htmlFor="picture">Picture</FieldLabel>
                    <Input id="picture" accept="image/*" type="file" onChange={loadPicture} />
                    <FieldDescription>Please select a galaxy picture to upload.</FieldDescription>
                </Field>
            </div>
            <div className="w-1/2">
                {!init && <Prediction isLoading={isLoading} preview={preview} title={title} proba={proba} className={className} />}
            </div>
        </div>
    );
}