import React from "react";
import ScrollFadeInSection from '../../components/animate-utils/ScrollFadeIn'

function SectionRenderer({ loading, skeleton: Skeleton, children, ...fadeProps }) {
  return loading
    ? <Skeleton />
    : <ScrollFadeInSection {...fadeProps}>{children}</ScrollFadeInSection>;
}

export default React.memo(SectionRenderer);
