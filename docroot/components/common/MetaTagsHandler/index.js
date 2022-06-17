import Head from 'next/head';

const MetaTagsHandler = ({ metaTags }) => {
  const newMetaTags = Object.keys(metaTags).map((key) => {
    let value = metaTags[key];

    switch (key) {
      case 'title':
        return <title key={key}>{value}</title>;

      case 'description':
        return <meta key={key} name={key} content={value} />;

      case 'canonical_url':
        return <link key={key} rel="canonical" href={value} />;

      case 'content_language':
        return <meta key={key} httpEquiv={key} content={value} />;

      case 'shortlink':
        return <link key={key} rel={key} href={value} />;

      case 'image_src':
        return <link key={key} rel={key} href={value} />;

      default:
        return <meta key={key} property={key.split('_').join(':')} content={value} />;
    }
  });

  return <Head>{newMetaTags}</Head>;
};

export default MetaTagsHandler;
