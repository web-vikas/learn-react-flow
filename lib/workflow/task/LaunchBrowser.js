import { TaskParamsType, TaskType } from "@/constants/workflow";
import { GlobeIcon } from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch browser",
    icon: (props) => (<GlobeIcon className="stroke-purple-400" {...props} />),
    isEntryPoint: true,
    inputs: [
        {
            name: "Website URL",
            type: TaskParamsType.STRING,
            helperText: "eg. google.com",
            required: true,
            hideHandle: true,
        }
    ]
}