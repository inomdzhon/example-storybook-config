export function createDeprecatedPropTypeValidator(propName: string, reason: string) {
  return (prop: unknown, componentName: string = '<<anonymous>>') => {
    if (typeof prop !== 'undefined') {
      return console.warn(`[@space307-ui/core]: The \`${propName}\` of \`${componentName}\` is deprecated. ${reason}`);
    }

    return null;
  };
}

export const deprecatedHostRefPropValidator = createDeprecatedPropTypeValidator('hostRef', 'Use `ref` instead.');

export const deprecatedIsDisabledPropValidator = createDeprecatedPropTypeValidator(
  'isDisabled',
  'Use `disabled` instead.',
);

export const deprecatedIsCheckedPropValidator = createDeprecatedPropTypeValidator(
  'isChecked',
  'Use `checked` instead.',
);

export const deprecatedIsBlockedPropValidator = createDeprecatedPropTypeValidator(
  'isBlocked',
  'Use `blocked` instead.',
);

export const deprecatedIsLoadingPropValidator = createDeprecatedPropTypeValidator(
  'isLoading',
  'Use `loading` instead.',
);
