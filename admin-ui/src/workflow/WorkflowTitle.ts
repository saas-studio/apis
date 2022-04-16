import { Workflow as TWorkflow } from "../api/workflow/Workflow";

export const WORKFLOW_TITLE_FIELD = "id";

export const WorkflowTitle = (record: TWorkflow): string => {
  return record.id || record.id;
};
