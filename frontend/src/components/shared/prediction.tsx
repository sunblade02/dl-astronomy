


import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Spinner } from "../ui/spinner"

export function Prediction({
    title,
    isLoading,
    preview,
    proba,
    className
}:{
    title: string|null,
    isLoading: boolean,
    preview: string|null,
    proba: number|null,
    className: string|null
}) {
    let confidence: number|null = null;
    if (proba) {
        confidence = Math.round((proba > 0.5 ? proba : 1 - proba) * 100);
    }

    return (
        <Card className="w-full m-auto">
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <img
                src={preview == null ? "https://avatar.vercel.sh/shadcn1" : preview}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardContent className="flex justify-around">
                {isLoading ? 
                    <Spinner />
                :
                    <>
                        <Badge>{confidence && `${confidence} %`} <strong>{className?.toUpperCase()}</strong></Badge>
                        <Badge variant="outline">{proba && `Predict: ${proba.toFixed(4)}`}</Badge>
                    </>
                }
            </CardContent >
        </Card>
    )
}
