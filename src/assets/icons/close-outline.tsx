import { Ref, SVGProps, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    fill={"none"}
    height={16}
    ref={ref}
    width={16}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <g clipPath={"url(#a)"}>
      <path
        d={
          "m9 8 2.8-2.9a.7.7 0 0 0-1-1L8 7.2 5.1 4a.7.7 0 0 0-1 1l3 2.9-3 2.9a.7.7 0 0 0 .6 1.1.7.7 0 0 0 .4-.2L8 9l2.9 3a.7.7 0 1 0 1-1L8.8 8Z"
        }
        fill={"currentColor"}
      />
    </g>
    <defs>
      <clipPath id={"a"}>
        <path d={"M0 0h16v16H0z"} fill={"var(--color-light-100)"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);

export default Memo;
