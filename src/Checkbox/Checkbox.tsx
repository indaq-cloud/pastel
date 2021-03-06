import { css, cx } from "@linaria/core";
import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  PropsWithChildren,
  useCallback,
  useId,
} from "react";
//@ts-ignore
import Check from "../../icons/Check";
import "../global";

const CheckboxLabelContainer = css`
  margin: 0;
  padding: 0;
  display: inline-flex;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  cursor: pointer;
`;

const CheckboxDisabled = css`
  .${CheckboxLabelContainer} & {
    background-color: var(--button-disabled);
    border: none;
  }
`;

const CheckboxContainer = css`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid var(--neutral-black);
  background-color: var(--pure-white);

  transition: background-color 0.25s;

  &:not(.${CheckboxDisabled}):active,
  &:not(.${CheckboxDisabled}):focus {
    box-shadow: 0px 0px 0px 2px #bdbada;
  }

  & .pastel-icon {
    position: absolute;
    top: -1px;
    left: 3px;
    font-size: 12px;
    line-height: 12px;
    color: var(--pure-white);
    transition: top 0.25s;
    opacity: 0;
  }

  .${CheckboxLabelContainer}:hover &:not(.${CheckboxDisabled}) {
    border-color: var(--primary-4);
  }
`;

const CheckboxActive = css`
  &.${CheckboxContainer} {
    border: none;
    background-color: var(--primary-4);
  }
`;

const CheckboxIndeterminate = css`
  &::before {
    content: "";
    width: 12px;
    position: absolute;
    left: 3px;
    height: 2px;
    top: 8px;
    background-color: var(--pure-white);
    border-radius: 4px;
  }
`;

const CheckboxChecked = css`
  & .pastel-icon {
    top: 3px;
    opacity: 1;
  }
`;

const CheckboxInput = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxLabel = css`
  padding: 0 8px;
`;

export type CheckboxProps = {
  className?: string;
  value?: boolean;
  indeterminate?: boolean;
  onChange?: (b: boolean) => void;
  disabled?: boolean;
};

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, PropsWithChildren<CheckboxProps>> = (
  { value, className, children, onChange: _onChange, disabled, indeterminate },
  ref
) => {
  const id = useId();
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      _onChange?.(e.target.checked);
    },
    [_onChange]
  );
  const active = value || indeterminate;
  const checked = indeterminate ? false : value;
  return (
    <label htmlFor={id} className={cx(CheckboxLabelContainer, className)}>
      <span
        className={cx(
          CheckboxContainer,
          active && CheckboxActive,
          checked && CheckboxChecked,
          disabled && CheckboxDisabled,
          indeterminate && CheckboxIndeterminate
        )}>
        <Check />
        <input
          ref={ref}
          id={id}
          className={CheckboxInput}
          type={"checkbox"}
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
      </span>
      {children && <span className={CheckboxLabel}>{children}</span>}
    </label>
  );
};

export default memo(forwardRef(Checkbox));
