import * as React from "react";
import { MdxWrapper } from "../Layout";

import * as styles from "../../components/DevlogPost/DevlogPost.module.scss";

export interface DevlogPostProps {
  data: Queries.DevlogPostQuery;
  children?: React.ReactNode;
  preview?: boolean;
}

export const DevlogPost: React.FC<DevlogPostProps> = ({
  data,
  children,
  preview = false,
}) => {
  if (preview) {
    // TODO: change devlog post coloring to be based on slug
    const getSlugColor = (r: number, g: number, b: number) => {
      if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0)
        return `#000`;
      return `#${Math.floor(r).toString(16)}${Math.floor(g).toString(
        16
      )}${Math.floor(b).toString(16)}`;
    };

    // TODO: implement random SVG icon
    // TODO: add next and prev buttons
    return (
      <div className={styles.devlogPostPreview}>
        <div>
          <div
            className={styles.devlogPostPreviewSlug}
            style={{
              color: getSlugColor(0, 0, 0),
            }}
          >
            {data?.mdx?.frontmatter?.slug}
          </div>
          <div className={styles.devlogPostPreviewDate}>
            {data?.mdx?.frontmatter?.date}
          </div>
        </div>
        <div>
          <div>{data?.mdx?.frontmatter?.title}</div>
          <div className={styles.devlogPostPreviewExcerpt}>
            {data?.mdx?.excerpt}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.devlogPostDate}>
          {data?.mdx?.frontmatter?.date}
        </div>
        <MdxWrapper>{children}</MdxWrapper>
      </div>
    );
  }
};

export default DevlogPost;
