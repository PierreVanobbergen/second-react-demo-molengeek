import React from 'react';

class TableDisplay extends React.Component {

    render() {
        let tabHeader = this.props.header.map((value) =>
            <th key={value}>
                {value}
            </th>);
        let tabContent = this.props.content.map((content, index) => {
            let line = [];
            for (let key of Object.keys(content)) {
                line.push(
                    <td key={key}>
                        {content[key]}
                    </td>
                )
            }
            let key = this.props.uniqueKey === undefined ? index : content[this.props.uniqueKey];
            return <tr key={key}>{line}</tr>
        }
        );

        return (
            <table>
                <thead>
                    <tr>{tabHeader}</tr>
                </thead>
                <tbody>
                    {tabContent}
                </tbody>
            </table>
        );
    }
}
export default TableDisplay;