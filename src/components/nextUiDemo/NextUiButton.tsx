import { Button, NormalColors } from '@nextui-org/react';
import React from "react";

type Props = {
    shadow?: boolean;
    color?: NormalColors;
}

export const NextUiButton: React.FC<Props> = (
        {
            shadow,
            color,
        }) => {
        return (
            <Button
                shadow={shadow}
                color={color ?? 'primary'}
            >
                Click me
            </Button>
        );
    }
;