import * as React from "react";

interface ICheckBoxProps {
  label: string;
  checked: boolean;
}

export default class CheckBox extends React.Component<ICheckBoxProps> {
  public static defaultProps: Partial<ICheckBoxProps> = {
    label: "default"
  };

  onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ checked: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <div>
          <input type="checkbox" checked={this.props.checked} />
          {this.props.label}
        </div>
      </div>
    );
  }
}
