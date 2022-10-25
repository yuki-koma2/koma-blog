import { NextPage } from "next";
import { MantineDemoButton } from "../../components/mantineDemo/MantineDemoButton";
import { NextUiButton } from "../../components/nextUiDemo/NextUiButton";

const UiTest: NextPage = () => {
    return (
        <>
            <MantineDemoButton/>
            <NextUiButton/>
            <NextUiButton shadow/>
            <NextUiButton shadow color={'gradient'}/>
        </>
    )
}

export default UiTest