import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import styled,{ ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Typer</title>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400+800" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4=" crossorigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
