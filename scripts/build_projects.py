#!/usr/bin/env python3
import copy
import json

import pandas as pd
import click
import msft2021
import strp2020


@click.command()
@click.argument('sources', nargs=-1)
@click.option('--output-projects', default='projects.js', show_default=True)
@click.option('--output-methods', default='methods.js', show_default=True)
@click.option('--output-numbers', default='numbers.js', show_default=True)
@click.option('--output-csv', default='projects.csv', show_default=True)
@click.option('--output-json', default='projects.json', show_default=True)
def main(
        sources, 
        output_projects, 
        output_methods, 
        output_numbers,
        output_csv,
        output_json
    ):

    projects = []

    if 'strp2020' in sources:
        projects.extend(strp2020.make_projects())
    if 'msft2021' in sources:
        projects.extend(msft2021.make_projects())

    project_collection = {"type": "ProjectCollection", "projects": projects}

    write_projects(project_collection, output_projects)
    write_methods(project_collection, output_methods)
    write_numbers(project_collection, output_numbers)
    write_csv(project_collection, output_csv)
    write_json(project_collection, output_json)

def write_projects(project_collection, output):
    collection = copy.deepcopy(project_collection)
    for project in collection['projects']:
        del project['methods']

    with open('data/' + output, "w") as f:
        f.write('module.exports=' + json.dumps(collection))


def write_methods(project_collection, output):
    methods = []
    for project in project_collection['projects']:
        tmp = {}
        tmp['type'] = 'Methods'
        tmp['id'] = project['id']
        tmp['applicant'] = project['applicant']
        tmp['content'] = project['methods']
        methods.append(tmp)

    collection = {}
    collection['type'] = 'MethodsCollection'
    collection['methods'] = methods

    with open('data/' + output, "w") as f:
        f.write('module.exports=' + json.dumps(collection))


def write_numbers(project_collection, output):
    collection = copy.deepcopy(project_collection)
    for project in collection['projects']:
        del project['methods']
        del project['description']
        del project['documentation']
        del project['revisions']
        del project['source']
        del project['type']
        del project['keywords']
        for metric in project['metrics']:
            del metric['comment']
            del metric['notes']
            del metric['units']
            del metric['type']

    with open('data/' + output, "w") as f:
        f.write('module.exports=' + json.dumps(collection))

def write_csv(collection, output):
    projects = collection['projects']
    df = pd.DataFrame()

    df['id'] = [d['id'] for d in projects]
    df['applicant'] = [d['applicant'] for d in projects]
    df['location'] = [d['location']['name'] for d in projects]
    df['description'] = [d['description'] for d in projects]
    df['tags'] = [','.join(d['tags']) for d in projects]

    df['source'] = [d['source']['name'] for d in projects]
    df['source_url'] = [d['source']['url'] for d in projects]
    df['source_license'] = [d['source']['license'] for d in projects]

    df['documentation'] = [d['documentation']['url'] for d in projects]

    df['mechanism'] = [d['metrics'][0]['value'] for d in projects]
    df['mechanism_rating'] = [d['metrics'][0]['rating'] for d in projects]
    df['mechanism_notes'] = [d['metrics'][0]['notes'] for d in projects]
    df['mechanism_comment'] = [d['metrics'][0]['comment'] for d in projects]

    df['volume'] = [d['metrics'][1]['value'] for d in projects]
    df['volume_rating'] = [d['metrics'][1]['rating'] for d in projects]
    df['volume_notes'] = [d['metrics'][1]['notes'] for d in projects]
    df['volume_comment'] = [d['metrics'][1]['comment'] for d in projects]

    df['negativity'] = [d['metrics'][2]['value'] for d in projects]
    df['negativity_rating'] = [d['metrics'][2]['rating'] for d in projects]
    df['negativity_notes'] = [d['metrics'][2]['notes'] for d in projects]
    df['negativity_comment'] = [d['metrics'][2]['comment'] for d in projects]

    df['permanence'] = [d['metrics'][3]['value'] for d in projects]
    df['permanence_rating'] = [d['metrics'][3]['rating'] for d in projects]
    df['permanence_notes'] = [d['metrics'][3]['notes'] for d in projects]
    df['permanence_comment'] = [d['metrics'][3]['comment'] for d in projects]

    df['additionality'] = [d['metrics'][4]['value'] for d in projects]
    df['additionality_notes'] = [d['metrics'][4]['notes'] for d in projects]
    df['additionality_comment'] = [d['metrics'][4]['comment'] for d in projects]

    df['cost'] = [d['metrics'][5]['value'] for d in projects]
    df['cost_notes'] = [d['metrics'][5]['notes'] for d in projects]
    df['cost_comment'] = [d['metrics'][5]['comment'] for d in projects]

    df['specificity'] = [d['metrics'][6]['value'] for d in projects]
    df['specificity_notes'] = [d['metrics'][6]['notes'] for d in projects]
    df['specificity_comment'] = [d['metrics'][6]['comment'] for d in projects]

    df['rating'] = [d['rating'] for d in projects]

    df['revisions'] = [d['revisions'] for d in projects]

    df.to_csv('data/' + output, index=False)

def write_json(collection, output):
    with open('data/' + output, "w") as f:
        f.write(json.dumps(collection))

if __name__ == "__main__":
    main()
