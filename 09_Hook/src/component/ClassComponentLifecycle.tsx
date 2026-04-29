import { Component, type ReactNode } from "react";

type Props = {
    count: number;
};

type State = {
    count: number;
};

export default class ClassCounter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: props.count,
        };
    }

    handleClick = (): void => {
        this.setState((preState) => ({ count: preState.count + 1}));
    }

    render() : ReactNode {
        console.log('render 호출');

        return (
            <div>
                <p>{this.state.count}번 클릭했습니다.</p>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
    componentDidMount(): void {
        console.log('componentDidMount 호출');
    }

    componentDidUpdate(): void {
        console.log('componentDidUpdate 호출');
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount 호출');
    }
}