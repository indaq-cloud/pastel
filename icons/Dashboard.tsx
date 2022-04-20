import { cx } from "@linaria/core";
import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = ({ className, ...props }: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className={cx("pastel-icon", className)}
    viewBox={"0 0 16 16"}
    width={"1em"}
    height={"1em"}
    xmlns={"http://www.w3.org/2000/svg"}
    ref={ref}
    {...props}>
    <g fill={"currentColor"}>
      <path
        d={
          "M8 5.72a.357.357 0 0 0-.247.094.369.369 0 0 0-.119.24l-.546 3.26a.937.937 0 0 0 .238.697.907.907 0 0 0 .666.296.894.894 0 0 0 .665-.296.925.925 0 0 0 .239-.698l-.547-3.26a.358.358 0 0 0-.11-.237A.346.346 0 0 0 8 5.72ZM10.474 3.826a4.677 4.677 0 0 0-.437-.227.323.323 0 0 0-.442.194l-.628 1.705c.21.079.41.183.595.311l1.005-1.505a.337.337 0 0 0-.093-.478ZM5.925 3.626a4.799 4.799 0 0 0-.41.217.335.335 0 0 0-.152.216.344.344 0 0 0 .049.262l.993 1.516c.195-.13.402-.24.618-.328l-.656-1.666a.34.34 0 0 0-.174-.207.329.329 0 0 0-.268-.01ZM10.676 7.43v.056c.05.213.075.431.076.65h1.808a.324.324 0 0 0 .242-.107.334.334 0 0 0 .085-.254c0-.172-.032-.344-.06-.517a.347.347 0 0 0-.15-.218.335.335 0 0 0-.26-.043l-.704.173-1.037.26ZM3.195 7.342l-.044.433a.344.344 0 0 0 .087.263.333.333 0 0 0 .251.109l1.759-.028v-.294c.012-.129.032-.257.06-.383l-1.72-.395a.328.328 0 0 0-.35.163.343.343 0 0 0-.043.132ZM4.085 5.104a4.86 4.86 0 0 0-.268.388.348.348 0 0 0 .131.49l1.59.832c.097-.2.22-.387.365-.555L4.576 5.054a.332.332 0 0 0-.388-.044.335.335 0 0 0-.103.094ZM11.391 5.043l-1.332 1.21c.148.17.276.356.382.556l1.573-.856a.33.33 0 0 0 .167-.203.338.338 0 0 0-.03-.263 4.207 4.207 0 0 0-.285-.411.335.335 0 0 0-.23-.118.328.328 0 0 0-.245.085ZM8.235 5.326h.087V5.22l.197-1.705a.344.344 0 0 0-.174-.339.329.329 0 0 0-.127-.038h-.491a.323.323 0 0 0-.234.12.335.335 0 0 0-.072.257l.224 1.722v.105c.195-.028.393-.034.59-.016Z"
        }
      />
      <path
        d={
          "M12.303 14.994H3.697l-.317-.233a8.126 8.126 0 0 1-2.965-4.054 8.267 8.267 0 0 1-.039-5.053 8.132 8.132 0 0 1 2.901-4.102A7.91 7.91 0 0 1 8-.017a7.91 7.91 0 0 1 4.723 1.57 8.132 8.132 0 0 1 2.901 4.101 8.267 8.267 0 0 1-.04 5.053 8.127 8.127 0 0 1-2.964 4.054l-.317.233ZM4.5 12.501h6.995a5.645 5.645 0 0 0 1.84-2.852 5.728 5.728 0 0 0-.115-3.408 5.628 5.628 0 0 0-2.026-2.718 5.48 5.48 0 0 0-3.197-1.032 5.48 5.48 0 0 0-3.196 1.032 5.628 5.628 0 0 0-2.026 2.718 5.728 5.728 0 0 0-.115 3.408 5.645 5.645 0 0 0 1.84 2.852Z"
        }
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);

export default Memo;