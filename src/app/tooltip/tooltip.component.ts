import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

@Component({
  selector: "cis-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {

  @Input() text: string

}
