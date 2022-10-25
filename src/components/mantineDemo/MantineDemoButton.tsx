import { NextLink } from '@mantine/next';
import { Button } from '@mantine/core';

export function MantineDemoButton() {
    return (
        <Button component={NextLink} href="/blog">
            Next link button
        </Button>
    );
}