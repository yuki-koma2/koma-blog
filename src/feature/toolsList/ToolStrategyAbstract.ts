import {ToolType} from "./toolType";


abstract class ToolStrategyAbstract {
    protected name: string;
    protected icon: string;
    protected description: string;
    protected path: string;
    protected type: ToolType;

    protected constructor(name: string, icon: string, description: string, path: string, type: ToolType) {
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.path = path;
        this.type = type;
    }

}