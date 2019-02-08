# styled-components-feature-detection

Feature detection utilities for [styled-components](https://www.styled-components.com/)

## ref

Helper function which accpets a `refOrInnerRef` handler and returns an object which can be spread in the props of a styled component. The object's key is either `ref` or `innerRef` depending [styled-components](https://www.styled-components.com/) support of the `ref` property. The value is the given ref handler.

```jsx
import React from "react";
import styled from "styled-components";
import ref from "@plumbblake/styled-components-feature-detection/ref"

const SomethingStyled = styled.div``;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {
    return <SomethingStyled {...ref(this.myRef)} />
  }
}
```

## createGlobalStyle

Boolean value indicating if the version of [styled-components](https://www.styled-components.com/) installed supports `createGlobalStyle`.

```js
import isCreateGlobalStyleSupported from "@plumbblake/styled-components-feature-detection/createGlobalStyle"
```

## Contributing

See [contributing.md](contributing.md)
