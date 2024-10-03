import React from "react";

const AtomButton = React.forwardRef(
  (
    type,
    disable = false,
    onMouseDown,
    onClick,
    color = "",
    size,
    name,
    children,
    className,
    form,
    dataTestId,
    variant,
    width = "",
    startIcon,
    endIcon,
    ref,
  ) => {
    // Handler for click event on Button
    const handleAtomButtonClick = (event) => {
      if (!disable && onClick) {
        onClick(event);
      }
    };

    let colorClass = "";
    let sizeClass = "";
    let variantClass = "";
    let widthClass = "";

    // switch for color class
    switch (color) {
      case "primary":
        colorClass = "bg-red-500 border-none";
        break; // Add break statement
      case "secondary":
        colorClass = "bg-red-300 border-none";
        break; // Add break statement
      default:
        colorClass = "bg-red-500 border-none"; // Default to primary color
    }

    // switch for button sizes
    switch (size) {
      case "small":
        sizeClass = "py-[0.875rem] px-[1.25rem]  font-normal text-[0.875rem]";
        break;
      case "medium":
        sizeClass = "py-[0.875rem] px-[1.25rem]  font-normal text-[1rem]";
        break;
      case "large":
        sizeClass = "py-[1.125rem] px-[1.75rem]  font-normal text-[1.25rem]";
        break;
      case "xxl":
        sizeClass =
          "py-[0.875rem] px-[1.13rem]  font-serif w-[12.5rem] text-[1.25rem]";
        break;
      default:
    }

    // switch for button variants
    switch (variant) {
      case "default":
        variantClass = "bg-red-300 text-white-100";
        break;
      case "outlined":
        variantClass =
          "bg-transparent border-solid border-red-100 text-red-100";
        break;
      case "text":
        variantClass = "bg-transparent border-none text-red-200 text-underline";
        break;
      default:
    }

    // switch for button width
    switch (width) {
      case "sm":
        widthClass = "w-[25%]"; // Define a corresponding CSS class in your styles module
        break;
      case "md":
        widthClass = "w-[50%]";
        break;
      case "lg":
        widthClass = "w-[100%]";
        break;
      default:
    }

    return (
      <div>
        <button
          type={type}
          data-testid={dataTestId}
          ref={ref}
          disabled={disable}
          onMouseDown={onMouseDown}
          onClick={handleAtomButtonClick}
          name={name}
          className={`${className} ${
            disable ? "" : colorClass
          } ${sizeClass} ${variantClass} ${widthClass}`}
          form={form}
        >
          {startIcon && <span>{startIcon}</span>}
          {children}
          {endIcon && <span>{endIcon}</span>}
        </button>
      </div>
    );
  },
);

AtomButton.displayName = "AtomButton";

export default AtomButton;
