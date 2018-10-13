# Card

## HTML structure

### Basic
```
<div class="card">
  ...content here...
</div>
```

### Card title
```
<div class="card">
  <div class="card-title">
    <h1>Card title</h1>
  </div>
  ...content goes here...
</div>
```

### Card title with links
```
<div class="card">
  <div class="card-title">
    <h1>Card title</h1>
    <a>Some action</a>
    <a>Some other action</a>
  </div>
  ...content goes here...
</div>
```

## React component

### Basic usage

```
import Card from '../UI/Card/Card';


class Card extends React.Component {

render () {
  return(
    <Card>
      ...Content here...
    </Card>
  )
}

```

### With title prop
```
<Card title="Card title">
  ...Content here...
</Card>
```

### With links prop

You can pass the card a links prop, which takes an array of objects. Each object can have the following properties:

* `content` - string, link text that appears in the UI (i.e. edit)
* `onAction` - function, fires when the link is clicked

```
import Card from '../UI/Card/Card';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.someFunction = this.someFunction.bind(this);
  }

  someFunction() {
    ...code to execute when the card action is clicked here...
  }

  render () {
    return(
      <Card
        title="Card title"
        links={[
          {content: "Edit", onAction: this.someFunction}
        ]}
      >
        ...Content here...
      </Card>
    )
  }
}
```
