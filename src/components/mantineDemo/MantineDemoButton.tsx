import { NextLink } from '@mantine/next';
import { Button } from '@mantine/core';

type Props = {
    href?: string;
}

export function MantineDemoButton({href}:Props) {
    return (
        <Button component={NextLink} href={href ?? '/'}>
            Next link button
        </Button>
    );
}