import { Component } from 'react';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    return (
      <section>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </section>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
