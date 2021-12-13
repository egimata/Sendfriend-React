export const ScreenSizes = {
    mobile: 468,
    tablet: 1024,
    desktop: 1400,
};

export const mediaQueries = {
    mobileQuery: `(max-width: ${ScreenSizes.mobile}px)`,
    // tabletQuery: `(min-width: ${ScreenSizes.mobile}px) and (max-width: ${ScreenSizes.tablet}px)`,
    desktopQuery: `(min-width: ${ScreenSizes.tablet}px)`,
}