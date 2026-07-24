import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  currentPage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = `${BUSINESS_INFO.name} - ${BUSINESS_INFO.altName} | Pharmacy & Medical Store in Kurtha, Bihar`,
  description = `${BUSINESS_INFO.tagline}. Located at DEVI STHAN, BIDROHI CHOWK, Kurtha, Bihar. Call ${BUSINESS_INFO.phone} or send WhatsApp prescription orders for 100% genuine medicines.`,
  keywords = 'Sahu pharma, New Sahu Medical, medical store Kurtha, pharmacy in Kurtha Bihar, Bidrohi Chowk pharmacy, genuine medicines Kurtha, prescription medicines, baby care products, surgical items, WhatsApp medicine order, Arwal pharmacy',
  canonicalUrl = 'https://sahupharma-kurtha.com',
  currentPage = 'Home'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // Schema JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Pharmacy',
          '@id': `${canonicalUrl}/#pharmacy`,
          'name': BUSINESS_INFO.name,
          'alternateName': BUSINESS_INFO.altName,
          'description': BUSINESS_INFO.tagline,
          'url': canonicalUrl,
          'telephone': BUSINESS_INFO.phoneFormatted,
          'priceRange': '₹',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': BUSINESS_INFO.address.landmark,
            'addressLocality': BUSINESS_INFO.address.city,
            'addressRegion': BUSINESS_INFO.address.state,
            'postalCode': BUSINESS_INFO.address.pincode,
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 25.0482,
            'longitude': 84.8821
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '07:00',
              'closes': '22:00'
            }
          ],
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': BUSINESS_INFO.rating,
            'reviewCount': BUSINESS_INFO.totalReviews
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}/#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': canonicalUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': currentPage,
              'item': `${canonicalUrl}/#${currentPage.toLowerCase()}`
            }
          ]
        }
      ]
    };

    scriptTag.text = JSON.stringify(schemaData);
  }, [title, description, keywords, canonicalUrl, currentPage]);

  return null;
};
