import { config } from "../../devdash_config";

export function Dashboard() {
  const title = '_DevDash'

  const widgets = config.widgets.map((widget) => widget.repository_url)

  return <div>
    <h1>{title}</h1>;
    {widgets}
  </div>
}