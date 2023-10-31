import {
  Form,
  FieldError,
  TextField,
  Label,
  Input,
  Button,
  ListBoxItem,
  ListBox,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

function App() {
  return (
    <Form
      onChange={(e) => console.log(e)}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      onInvalid={(e) => console.log(e)}
    >
      <TextField
        name="test"
        isRequired
        minLength={3}
        validate={(value) => (value === "lorem ipsum" ? "not lorem" : null)}
      >
        <Label>Test</Label>
        <Input />
        <FieldError></FieldError>
      </TextField>
      <Select
        name="test2"
        validate={(value) => (value === "dog" ? "Please not doggo" : null)}
      >
        <Label>Favorite Animal</Label>
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
            <ListBoxItem id="cat">Cat</ListBoxItem>
            <ListBoxItem id="dog">Dog</ListBoxItem>
            <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
            <ListBoxItem id="panda">Panda</ListBoxItem>
            <ListBoxItem id="snake">Snake</ListBoxItem>
          </ListBox>
        </Popover>
        <FieldError></FieldError>
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default App;
