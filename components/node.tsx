import * as React from 'react';
import { DrupalNode } from 'next-drupal';

import { NodeAdministrativeArea } from 'components/node--administrative_area';
import { NodeArticle } from 'components/node--article';
import { NodeCountry } from 'components/node--country';
import { NodeEvent } from 'components/node--event';
import { NodeGovernmentOrganization } from 'components/node--government_organization';
import { NodeLegislation } from 'components/node--legislation';
import { NodeOrganization } from 'components/node--organization';
import { NodePage } from 'components/node--page';
import { NodePerson } from 'components/node--person';
import { NodePlace } from 'components/node--place';
import { NodeReport } from 'components/node--report';
import { DrupalEntity } from 'components/entity';

export const RESOURCE_TYPES = [
    'node--administrative_area',
    'node--article',
    'node--country',
    'node--event',
    'node--government_organization',
    'node--legislation',
    'node--organization',
    'node--page',
    'node--person',
    'node--place',
    'node--report',
];

export const RESOURCE_INCLUDES = {
    'node--administrative_area':
        'uid,image,image.uid,image.thumbnail,image.image,keywords,author,author.uid,author.image',
    'node--article':
        'uid,image,image.uid,image.thumbnail,image.image,keywords,author,author.uid,author.image',
    'node--country':
        'uid,image,image.uid,image.thumbnail,image.image,keywords,author,author.uid,author.image',
    'node--event':
        'uid,image,image.uid,image.thumbnail,image.image,location,location.uid,location.image,organizer,organizer.uid,organizer.image,performer,performer.uid,performer.image',
    'node--government_organization': 'uid,image,image.uid,image.thumbnail,image.image,logo,logo.uid,logo.thumbnail,logo.image,logo.path',
    'node--legislation':
    'uid,has_part,has_part.uid,has_part.content_url,legislation_jurisdiction,legislation_passed_by,legislation_responsible,subject_of',
    'node--organization': 'uid,image,image.uid,image.thumbnail,image.image',
    'node--page':
        'uid,primary_image_of_page,primary_image_of_page.uid,primary_image_of_page.thumbnail,primary_image_of_page.image',
    'node--person': 'uid,image,image.uid,image.thumbnail,image.image',
    'node--place': 'uid,image,image.uid,image.thumbnail,image.image',
};

interface NodePageProps {
    resource: DrupalNode;
}

export function Node({ resource }: NodePageProps) {
    switch (resource.type) {
        case 'node--administrative_area':
            return <NodeAdministrativeArea node={resource} />;

        case 'node--article':
            return <NodeArticle node={resource} />;

        case 'node--country':
            return <NodeCountry node={resource} />;

        case 'node--event':
            return <NodeEvent node={resource} />;

        case 'node--government_organization':
            return <NodeGovernmentOrganization node={resource} />;

        case 'node--legislation':
            return <NodeLegislation node={resource} />;

        case 'node--organization':
            return <NodeOrganization node={resource} />;

        case 'node--page':
            return <NodePage node={resource} />;

        case 'node--person':
            return <NodePerson node={resource} />;

        case 'node--place':
            return <NodePlace node={resource} />;

        case 'node--report':
            return <NodeReport node={resource} />;

        default:
            return <DrupalEntity entity={resource} />;
    }
}
