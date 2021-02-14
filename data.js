module.exports = {
  type: 'ProjectCollection',
  projects: [
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from the atmosphere using a solid chemical sorbent. Captured carbon dioxide is geologically sequestered in mineral form.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume based on the annual capacity of a pilot plant in Iceland commissioned in October 2017. Larger-scale plants are under construction that may offer more volume.',
          comment:
            'Scale of volume is commensurate with published sorbent technology. Technology can be deployed on a modular basis.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 0.0,
          notes:
            'Claims total emissions are 0.1 tCO2 for every 1 tCO2 removed.',
          comment:
            'Detailed assessment in collaboration with research group is pending publication. Low ratio likely depends on availability of low-carbon energy in Iceland.',
          removal: 1.0,
          emissions: 0.1,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits. New investments may relate to future deployments rather than current procurements.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 767.5,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: 'Reported value is the average of the range $735-800.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Publications on LCA are pending. Publications or public datasets on specific approaches are not yet available.',
        },
      ],
      tags: ['dac', 'mineralization'],
      id: 'STRP001',
      description: 'Direct air capture and mineralization.',
      applicant: 'Climeworks',
      rating: '4',
      keywords: '',
      location: { name: 'Iceland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url:
          'https://climeworks.com/?gclid=CjwKCAiAsOmABhAwEiwAEBR0ZuKCUY_PYVVfUxdCZAouyGr1H8eRIqPSxWG7-VNxqQLX5Uf9WhNvRRoCijIQAvD_BwE',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a waste stream. From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 60000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume reflects 200 cement production facilities using the technology. Every 1 tCO2 used corresponds to 0.85 tCO2 mineralized and 44.45 tCO2 avoided by reducing conventional concrete production emissions from 0.26 tCO2 / m3 to 0.22 tCO2 / m3.',
          comment:
            'Reporting 60000 tCO2 as an estimate of current annual volume. Total volume combines utilization and avoided emissions from reducing conventional concrete production. Based on ratios provided in LCA, we infer 1126 total tCO2 utilitized and 58874 tCO2 avoided. Validating this breakdown would require more specific project parameters.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.824,
          units: '',
          rating: 1.0,
          notes:
            'Claims 0.85 tCO2 mineralized and 0.15 tCO2 emitted for every 1 tCO2. Reported ratio of 0.9967 also includes an additional 44.45 tCO2 in avoided emissions arising from its product replacing conventional concrete.',
          comment:
            'For consistency, we recompute negativity only for the carbon utilization component, yielding a lower number. LCA boundary conditions are well-specified, and several third-party audits of the LCA analysis have been performed.',
          removal: 0.85,
          emissions: 0.15,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Cement will already be purchased and used separate from its carbon removal benefits. The carbon removal benefits are being offered separately, albeit for the first time for this company.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            'Amount charged specifically for carbon removal is explicitly set to incentivize utilization of the product, which may already be economically favorable based on project description.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Publications on specific techology are not yet available, but references to several third-party LCAs are provided and may be available upon request.',
        },
      ],
      tags: ['mineralization', 'concrete'],
      id: 'STRP002',
      description: 'Carbon reductions in concrete.',
      applicant: 'CarbonCure',
      rating: '3',
      keywords: '',
      location: { name: 'North America' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.carboncure.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            "Multiple established soil carbon removal pathways exist, including five referenced in the Nori Croplands methodology (Section 2.3 of Version 1.1). According to independent verification by Aster Global, Inc. available on Nori's website, this specific project is practicing no till and planting directly into a living winter cover crop.",
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 14011.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on a single supplier, Harborview Farms, which includes 27 plots totaling 14011 tCO2. Volumes calculated using USDA COMET-Farm model, using project-level data collected by Nori. The Nori platform offers a larger portfolio of projects, but they are not considered here.',
          comment:
            'Project locations are specified and COMET-Farm is a publicly available tool. Validating volume further would require knowing model parameters used, having more complete plot details, and knowing more about project duration.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes:
            'No data provided, but high likelihood it will vary across projects. Claimed guarantee that negativity will be greater than 0.',
          comment:
            'Emissions information ought to be available in the COMET-Farm model outputs, but cannot be reproduced as model parameters are not available.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Mentions that projects may continue to store carbon beyond the contract horizon.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. Nori requires a 10-year contractual commitment from its projects, which is a reasonable timeframe given bankruptcy and default risks. We report the minimum of the contractual agreement and the biogeophysical claim.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale. The Nori Croplands methodology requires additionality, but does not specify how it is determined how to independently identify or validate additionality claims.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 16.5,
          units: '$/tCO2',
          rating: '',
          notes:
            'Set by the supplier and includes a 10% fee to Nori as broker.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Several project details (e.g. plot locations) are available. Volume and LCA methods are based on the public and published COMET-Farm model. Specific parameters used for model are not public, limiting ability for independent analysis and quantification.',
        },
      ],
      tags: ['soil'],
      id: 'STRP003',
      description:
        'Increasing soil carbon sequestration and soil health at Harborview Farms.',
      applicant: 'Nori',
      rating: '2',
      keywords: 'Harborview Farms',
      location: { name: 'USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://nori.com/supplier/1' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '05-20-2020',
          note:
            'Updated mechanism validation based on notes from project website.',
        },
        {
          date: '02-03-2021',
          note:
            'Added documentation columns and changed description to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            'Multiple established soil carbon removal pathways exist, but validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 550000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Range of 100k-1M tCO2 based on potential participants in program.',
          comment:
            'We report the average of the range. Validation of volume would at a minimum require information on specific projects, and values are only plausible under a significant scale of participation, for example, 0.5M ha of farmland at a rate of 1 tCO2 / ha / yr.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: 'No data provided.',
          comment: '',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims that offsets issued under Climate Action Reserve or Verra protocols require 100-year commitments.',
          comment:
            'Soil carbon storage can be reversed by changed land management practices. Project claims that offset protocols ensure permanence on a 100-year timeframe, but of the protocols mentioned, only one is public in draft form (Climate Action Reserve) and it does not require projects to make legally-binding contracts for 100 years.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Includes 75% for farmers and 25% for monitoring, reporting, and verification work.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No information or data on specific projects are publicly available, and methods and protocols are either not publicly available or currently under review.',
        },
      ],
      tags: ['soil'],
      id: 'STRP004',
      description:
        'Regenerative farming practices for soil carbon sequestration.',
      applicant: 'Indigo Ag',
      rating: '1',
      keywords: '',
      location: { name: 'Midwest and Southern USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://www.indigoag.com/for-supporters/carbon',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            "Broker facilitates BECCS projects, which avoid emissions from biogenic carbon sources and instead capture it for geologic sequestration in rocks' pore space.",
          comment:
            'BECCS is a well-established technology. Project acts as a broker, rather than deploying a particular technology or process, so specific mechanisms could vary across sites.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Volume appears to be sourced from multiple BECCS projects.',
          comment:
            'Overall volume reasonable given technology. Further validation, including distinguishing relative amounts of removal vs avoided emissions, would require more specifics on individual projects in portfolio.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 0.0,
          notes: 'Range expected to vary across sites from 0.9 to 0.995.',
          comment:
            'Based on available project information, lifecycle emisisons do not include injection, and appear to exclude biogenic CO2 emissions not captured from production process. Possible uses for enhanced oil recovery would affect overall lifecycle emissions. Lacking more details, we report the lowest, most conservative ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes: '',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage. However, geologic storage stability depends on sound management practices, which could vary by specific project sites.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'BECCS projects are likely additioinal, but specifics depend on the economics of any applicable tax credits or policy incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 99.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is well understood. Few data on specific projects or deployment sites available in proposal or on project website. No references or third-party analyses available yet for LCA.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'STRP005',
      description: 'Supporting bio-energy with carbon capture and storage.',
      applicant: 'Biorecro',
      rating: '1',
      keywords: '',
      location: { name: 'North America / Europe' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'http://biorecro.com/?page=main' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. More broadly, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 56.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Demonstration project in California's central valley, converting walnut shell waste into biochar.",
          comment:
            'Volume is based on producing 16.89 t of biochar with at least 85% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.965,
          units: '',
          rating: 0.0,
          notes: 'Biogenic CO2 emissions are excluded from ratio.',
          comment:
            'Boundary conditions are well-specified and process described. Full LCA is pending several additional details.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 680.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100 years or more.',
          comment:
            'Using the reported O:C ratio of 0.08 and a simple published model we estimate 680 years as an approximate duration during which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is dumping walnut shells on ground or burning in biomass electricity plant.',
          comment:
            'Feedstock is walnut shells that are otherwise dumped on the ground or on roads, e.g. for dust reduction purposes. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 1000.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details are provided on project specifics. Additional documentaiton on LCA and other certification may be available upon request.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'STRP006',
      description: 'Turning woody biomass waste into biochar.',
      applicant: 'Carbo Culture',
      rating: '2',
      keywords: '',
      location: { name: 'Central Valley, CA, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.carboculture.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Drone technology accelerates reforestation to remove carbon from atmosphere for sequestration in forests.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 31027.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            "Volume based on a pilot project in the Pacific Northwest, East (USFS designation). Volume stated as computed using Climate Action Reserve's Climate Forward Reforestation Forecast Methodology Version 1.0, which appears in this case to use direct projections based on USFS yield tables for Ponderosa Pine. Claim is 510 tCO2 in the first year (2020), 31026 tCO2 in 51 years (the project lifetime), and 64031 tCO2 over 100 years.",
          comment:
            'We independently validated against USFS yield tables, assuming Ponderosa Pine in Pacific Northwest, East and project size of 211 ha. Assumes reforestation approach works as effectively as assumed, including seedling survival rates, for which public data or publications are not yet available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Claims 8.60 tCO2 emissions for drone fleet operation and transport, all of which are incurred in the first year of the project.',
          comment:
            'Boundary conditions are well-specified and drone-related emissions are thoroughly documented. For consistency, we recomputed negativity ratio using the 51-year project lifetime carbon removal estimate of 31,027 tCO2, rather than the removal projected only in 2020.',
          removal: 31027.0,
          emissions: 8.6,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 51.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims 51 years with potential economic incentives for longer durations.',
          comment:
            'Physical risks are unknown as exact location is unknown, but could be large given coarse location in the Pacific Northwest. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. In addition, because funds will be used to reforest another project, there is uncertainty as to the landowner committments and associated risks. See our comment on additionality for additional discussion.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes: 'Counterfactual is reforesting manually or not at all.',
          comment:
            'This project can be considered an investment in a new technology to lower the cost of reforestation, with funding likely going to future reforestation projects. As an investment in a specific quantity of carbon removal, however, there are then concerns about double-counting, as the landowner may attempt to separately monetize the same carbon benefits using a carbon offset protocol, and this pattern could repeat in future iterations.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.23,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            "Costs of $500.20/tCO2 were reported using only the carbon removal of 510 tCO2 expected in 2020, but an estimated 31,026 tCO2 will be removed over the project lifetime. For consistency, we have adjusted the reported $/tCO2 to reflect the total expected benefits across the project's lifetime.",
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Details are provided on plan and process, but no publications or public data are available on the new technology and its performance in reforestation projects.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'STRP007',
      description: 'Reforestation using heavy-lift drones and seed enablement.',
      applicant: 'Droneseed',
      rating: '2',
      keywords: '',
      location: { name: 'WA, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.droneseed.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Projects avoids emissions by avoiding forest loss and removes atmospheric carbon for sequestration in forests and forest products.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 165850.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Volume is the total of two exemplar projects, Rip's Redwoods and Guanare. The Pachama platform offers a larger portfolio of projects, but they are not considered here.",
          comment:
            "Claimed sequestration rates of 16 and 26 tCO2 / ha / yr for Rip's Redwoods and Guanare, respectively, are on the high end of published literature. Additional details on project (e.g. stand ages) and more information on proprietary quantification methods would be useful for validating volume.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.19,
          units: '',
          rating: 0.0,
          notes: 'Claims a range of 0.19 to 0.59 across exemplar projects.',
          comment:
            'Self-reported value appears unreasonably low, but not enough data is provided for validation. We report the lowest, most conservative ratio. Based on project type, however, we would expect a much higher ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 46.0,
          units: 'years',
          rating: 0.0,
          notes:
            "Claims 60 years from 2006 for Guanare and 100 years from 2013 for Rip's Redwoods.",
          comment:
            "We report the minimum across the estimated permanence for the underlying projects (46 and 97), relative to the year of the proposal (2020). Physical risks (mainly wildfire) are mixed, with higher risk for Guanare, and low to moderate risk for Rip's Redwoods. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes: 'Counterfactual scenarios specified for both projects.',
          comment:
            "Guanare project began in 2006, and thus future carbon removals are already assured under these historical land management practices. Rip's Redwood project already credited for standing carbon stock above regional baseline, which indicates a promise not to harvest normally and therefore raises questions about the additionality of ongoing carbon removal credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment: 'Basic project characteristics are described in detail.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'STRP008',
      description:
        "Reforestation with verification and monitoring in Rip's Redwoods and Guanare.",
      applicant: 'Pachama',
      rating: '1',
      keywords: "Rip's Redwoods, Guanare",
      location: { name: 'Uruguay & CA, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://pachama.com/explorer/projects',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        { date: '11-25-2020', note: 'Fixed ungrammatical sentence.' },
        {
          date: '02-03-2021',
          note:
            'Added documentation columns and changed description to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere via sequestration in phytoplankton and transport of phytoplankton biomass to deep ocean.',
          comment:
            'Novel early-stage technology with pilot demonstrations in progress. Dissolved carbon storage in deep oceans raises potential long-term carbon cycle and ocean acidification questions.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 693.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Demonstration project to be deployed offshore California or Hawaii. Project volume based on expected carbon removal over 5 years.',
          comment:
            'Difficult to assess volume due to early stage of technology.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.995,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on project materials, transportation, and business overhead, totaling 3.6854 tCO2 of emissions for 697 tCO2 removed.',
          comment:
            'Project emissions specified in detail, but difficult to validate because technology is early-stage and experimental.',
          removal: 697.0,
          emissions: 3.6854,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims a maximum of 5000, but with unknown reductions due to the potential for outgassing.',
          comment:
            'Carbon dioxide removed to lower ocean depths can be stable for millennia, but may affect ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectiveness, albeit a potentially very distant one.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits, and no such projects are operating today.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 336.07,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of technology with references. Specific publications or public data on demonstration projects not available.',
        },
      ],
      tags: ['ocean', 'phytoplankton'],
      id: 'STRP009',
      description:
        'Wave-powered upwelling/downwelling for carbon\u200b sequestration.',
      applicant: 'Ocean-based Climate Solutions',
      rating: '1',
      keywords: '',
      location: { name: 'Pacific Ocean (near CA)' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.ocean-based.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            'Multiple established soil carbon removal pathways exist. Specific mechnaisms for individual projects are not detailed.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 33000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Specific projects not identified. Claimed volume reflects 10-30 plots totaling 13355 ha with an average of 2.5 tCO2 / ha / year.',
          comment:
            'Claimed rate of 2.5 tCO2 / ha / yr is broadly commensurate with a range from existing literature and models. Few project specific details are available to validate volume further.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.5,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio provisional based on several referenced publications, with amended results to be determined in a future study.',
          comment:
            'Connection between existing references, project plans, and future study not clear. Net LCA impacts depend on methane emissions from livestock and no GWP conversion information reported.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 1000+ years in the abscence of behavioral changes.',
          comment:
            'Soil carbon storage can be reversed by changed land management practices. Soil Value Exchange requires 10-year contractual commitments, so we report the minimum of the contractual agreement and the biogeophysical claim.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual could include conventional grazing and intensive feedlot grazing, but no projects identified and no historical practices identified at specific project sites.',
          comment: 'Participating projects and their past practices unknown.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 30.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Cost appears to include payments to farmers and monitoring, veritification, and reporting, but no breakdown is specified.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No details available on specific projects. Protocol is under development but not yet available.',
        },
      ],
      tags: ['soil'],
      id: 'STRP010',
      description: 'Regenerative land management.',
      applicant: 'Soil Value Exchange',
      rating: '1',
      keywords: '',
      location: { name: '' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://www.soil-value-exchange.com/',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.',
          comment:
            'Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Timeframe over which expected volume of carbon reductions occurs is not stated.',
          comment:
            'Few details available on specific deployment plan. Based on public details from other deployments on project website, expected weathering for all GreenSand deposits since 2007 totals 306 tCO2. Given the $/tCO2 cost of project, it is likely that the claimed volume is over a longer time horizon than a single year.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.74,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio for exemplar project based on 2,880 tCO2 removed, 750 tCO2 emitted. LCA also references 509 tCO2 avoided, but avoided emissions are otherwise not considered as part of the project description.',
          comment:
            'For consistency, we recompute negativity only for the carbon removal component, yielding a lower number. Detailed analysis only available for one exemplar project, so we are uncertain about the full project portfolio and the specific proposal we analyzed.',
          removal: 2880.0,
          emissions: 750.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is using alternative rocks without carbon removal benefits, at least when olivine is purchased for use as gravel.',
          comment:
            'Olivine can be purchased and used separate from its carbon removal benefits, but can also be purchased separately only for carbon removal.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 35.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is reasonably well-described in the published literature. Several project details (including locations and durations) are publicly available.',
        },
      ],
      tags: ['mineralization', 'gravel'],
      id: 'STRP011',
      description: 'CO2 removal with olivine.',
      applicant: 'GreenSand',
      rating: '2',
      keywords: '',
      location: { name: 'Netherlands' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.greensand.nl/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Facilitates atmospheric carbon removal by extending time between forest harvests, avoiding emissions due to harvests and sequestering additional carbon in forests and forest products.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 15000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume extrapolated from a pilot implementation in 6 counties in Pennsylvania. Projects in 2020 will be sourced from 11 southern US states. Supply will be allocated via an auction.',
          comment:
            'Volume will be relatively straightforward to confirm via stocking estimates as a result of the 1 year project duration. Plausibility of large total volume depends on the number of particpants.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.999,
          units: '',
          rating: 1.0,
          notes:
            'Emissions estimates based solely on the operations of the small office team that will run the program and a field team that periodically verify project conditions.',
          comment:
            'No reason to consider additional emissions given program design.',
          removal: 1000.0,
          emissions: 1.0,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims that carbon removal from a one-year contract can last up to 10 years as a result of supply chain effects in the timber industry.',
          comment:
            'Because SilviaTerra uses an annual contracting model, we report 1 year.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: 'Counterfactual is active forest product harvest.',
          comment:
            'By shifting to a ton-year accounting framework, SilviaTerra intends to avoid additionality concerns by measuring actual carbon stored each year. However, other factors, such as exogenous shifts in timber markets, can still affect additionality considerations with respect to forest harvest decisions. Proprietary methods for measurement and verification against field plots are not yet available.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 15.0,
          units: '$/tCO2-year',
          rating: '',
          notes: '',
          comment:
            'SilviaTerra uses a ton-year accounting that reflects the cost per tCO2 stored per year. Thus, assuming constant price, a contract to store 1 tCO2 for 1 year at $15/tCO2-year would cost $15 and a contract to store 1 tCO2 for 100 years would cost $1,500.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of program design. Details on specific projects or methods for project quantification or selection are not yet publicly available.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'STRP012',
      description: 'Forest carbon rental markets.',
      applicant: 'SilviaTerra',
      rating: '3',
      keywords: '',
      location: { name: 'Southern USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.silviaterra.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        { date: '11-25-2020', note: 'Fixed typo.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project integrates tree crops and grazing livestock as silvopasture systems, to sequester carbon in both soil and aboveground biomass.',
          comment:
            'Planting of chestnut trees is clearly specified. Other practices that will be used to enhance soil carbon are are less clear.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 56.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Volume estimated from calculations using USDA COMET-Planner model (56 tCO2). A higher volume was also provided in parallel using Eric Toensmeier's The Carbon Farming Solution (140 tCO2). Project has 3.2 current ha and intends to add 4.9 ha.",
          comment:
            'We report the lower value offered because it is based on a method that includes a broader range of lifecycle emissions and because the project used the lower volume number to calculate project costs. While COMET-Farm is a publicly available tool, validating volume would require knowing model parameters used. Overall rate of 11.4 tCO2 / ha / yr is high if only including above ground biomass, but may be plausible given broader considerations.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.982,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on emissions from on-site tractor use and employee transportation, totaling 1.04 tCO2 for 56 tCO2 removed.',
          comment:
            'Calculation of tractor and transportation emissions appear reasonable. Project ratio is consistent with other reforestation projects, but lifecycle boundaries are not explicit. Specifically, no detail provided on methane emissions from livestock expansion and/or any soil carbon benefits.',
          removal: 56.0,
          emissions: 1.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 30.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 30 to 100 years.',
          comment:
            'We report 30 as the minimum of the claimed range. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon, but could be mitigated if the project buys and restricts its lands instead of leasing them.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment: 'No specific analysis available.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 4.14,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            'Rather than use the reported cost of $100, for consistency with other forest projects, we estimate a cost over the 30 year project lifetime using the provided rate of $1416.43 / ha and the information on provide size and volume.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Methods publicly described and shapefiles for locations provided. Model parameters for COMET-Planner and life cycle boundaries are not yet available.',
        },
      ],
      tags: ['forests', 'agroforestry'],
      id: 'STRP013',
      description:
        'Conversion of annual cropland to sheep/chestnut silvopasture.',
      applicant: 'Breadtree Farms',
      rating: '1',
      keywords: '',
      location: { name: 'Johnsonville, NY, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://breadtreefarms.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 4500.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Biochar produced from established production facility.',
          comment:
            'Volume is based on producing 1746.66 t of biochar with 78% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.982,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.046 tCO2 emitted for 2.79 tCO2 stored, with reported emissions including electricity for pre-treatment, transport, and electricity for pyrolysis. Project uses low-carbon electricity from the Nordic grid for pelletizing and pyrolysis.',
          comment:
            'Analysis required by Puro is pending but not yet completed. Boundary conditions well-specified and LCA components detailed and referenced. Minor permanence adjustment made for consistency with other biochar projects.',
          removal: 2.50965,
          emissions: 0.0455,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 869.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 500 to 4000 years.',
          comment:
            'Using the reported O:C ratio of 0.039 and a simple published model, we estimate 760 years as an approximate duration over which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Feedstock is agricultural (seed) waste. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details provided on project specifics, and uses public analysis as required by Puro for LCA. Third-party audit is pending.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'STRP014',
      description: 'Biochar production through pyrolysis.',
      applicant: 'Ecoera',
      rating: '2',
      keywords: '',
      location: { name: 'South Sweden' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url:
          'https://puro.earth/services/biochar-ecoera-millennium-1-sweden-100015',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in laminated wood building materials. May also avoid emissions that would come from producing other materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 25000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume sourced from multiple facilities across Finland to produce laminated lumber from kiln-dried pine and spruce. Claims an annual production capacity of 40000 tCO2. Project is based on the Puro platform.',
          comment:
            'Species and composition of wood and wood products are well-characterized. Volume appears plausible assuming the given procurement.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.776,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.16 tCO2 emissions for 0.71 tCO2 stored. Boundary conditions include raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced.',
          removal: 0.71,
          emissions: 0.159,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 50 to 200 years.',
          comment:
            'Wood carbon stored in building materials is more durable than in forests. We report 50 as the minimum of the claimed range, which is plausible based on existing literature.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is either decomposing biomass resources or using to generate heat or electrical energy.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process.',
        },
      ],
      tags: ['biomass', 'wood'],
      id: 'STRP015',
      description:
        'Laminated log production from lumber with CO2 sequestration.',
      applicant: 'Finnish Log House',
      rating: '4',
      keywords: '',
      location: { name: 'Finland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url:
          'https://puro.earth/services/wooden-building-elements-finland-on-hold-100010',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in wood and paper-based blown fiber used for insulation.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 21847.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume sourced from multiple facilities across Finland. Project is based on the Puro platform.',
          comment:
            'Carbon content of insulation products well-characterized. Volume appears plausible assuming the given procurement.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.935,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.087 tCO2 emissions for 1.34 tCO2 stored. Includes raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions generally well-specified and LCA components detailed and referenced. Paper products form a key component of the feedstock material, so it would be useful to characterize any emissions associated with their production.',
          removal: 1.34,
          emissions: 0.087,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 50 to 400 years.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests, but less is known about the specific blown loose wool materials described here. We report 50 as the minimum of the claimed range, but are unable to validate the duration with confidence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Existing industry has been in production since the 1980s, so the production of insulation does not seem contingent on carbon incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 21.5,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process.',
        },
      ],
      tags: ['biomass', 'wood'],
      id: 'STRP016',
      description: 'Net-negative wood products.',
      applicant: 'Ekovilla',
      rating: '2',
      keywords: '',
      location: { name: 'Kouvola, Finland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://puro.earth/ekovilla/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2250.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume sourced from a biochar facility in Finland. Project is based on the Puro platform.',
          comment:
            'Volume is based on producing 681.20 t of biochar with 92% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock. Also, note that the referenced Puro verification reports a rate of 3.1 tCO2 stored for 1 t of biochar rather than 3.4 tCO2, which would imply a C fraction of 85% rather than 92%.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.944,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.17 tCO2 emitted for 3.4 tCO2 stored. Includes fossil emissions for transporation and pyrolosis. Excludes 1.69 tCO2 emissions from biogenic sources, and does not include transporation to customer.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced. Minor permanence adjustment made for consistency with other biochar projects.',
          removal: 3.06,
          emissions: 0.17,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 807.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100 to 5000 years.',
          comment:
            'Using the reported O:C ratio of 0.021 and a simple published model, we estimate 1520 years as an approximate duration during which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Feedstock is residual wood (thinnings). Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details provided on project specifics, public documentation on chemical composition and LCA is available, with third-party analysis as required by Puro.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'STRP017',
      description: 'Biochar and carbon negative energy.',
      applicant: 'Carbofex',
      rating: '3',
      keywords: '',
      location: { name: 'Tampere, Finland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://puro.earth/services/biochar-finland-100008',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on initial production of 100 t of underlying product. Project is based on the Puro platform.',
          comment:
            'Early stage of technology makes it difficult to independently evaluate volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.2,
          units: '',
          rating: 0.0,
          notes:
            'Claims a range of possible ratios from 0.2 to 0.6 but provides no specifics, noting the process can be adjusted to produce different levels of carbon removal relative to emissions.',
          comment:
            'Analysis required by Puro is pending but not yet completed. Lacking more detail we report the lowest, most conservative ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims complete permanence. Mentions resesarch partner for analysis, but no specifics provided.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project involves initial production from carbon sequestering building materials using relatively expensive CO2 inputs (\u20ac75/tCO2).',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Several third-party analyses as required by Puro are still pending and not yet available.',
        },
      ],
      tags: ['mineralization', 'concrete'],
      id: 'STRP018',
      description: 'Producing bricks and slips by carbonation.',
      applicant: 'Vandersanden',
      rating: '3',
      keywords: '',
      location: { name: 'Finland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://www.vandersanden.com/en',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from atmosphere for sequestration in forest and soil carbon stocks, and avoids emissions from lost forest carbon.',
          comment:
            'Reforestration of degraded lands is clearly specified, but other aspects of practices to enhance soil carbon remain vague.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6380.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume projected for one year on a 174 ha land project in Scotland. Claimed breakdown of total volume includes 18.3 - 25.7 tCO2 / ha / year for above ground biomass, 7.3 - 25.7 tCO2E / ha / year for soil carbon, and 11 - 22 tCO2 / ha / year for biochar.',
          comment:
            'Project provides references for forest growth rates, though claimed rates of tCO2 / ha / yr are on the high end of published estimates. Estimates for soil carbon difficult to validate without more specifics on planned management practices or site properties.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.995,
          units: '',
          rating: 0.0,
          notes:
            'Emission calculations based on one-time planting and fencing emissions amortized over 60 years. Various ongoing operations including raising pigs and transporation.',
          comment:
            'Boundary conditions and emission sources well-specified, and consistent with similar projects. Claimed carbon removal benefits are on the high end of published estimates, which may explain the high value reported here.',
          removal: 6380.0,
          emissions: 29.72,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 60.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 100 to 1000 years.',
          comment:
            'Project involves both forests and soil carbon. We report 60 years rather than 100 as 60 is mentioned as a minimum specifically for forests. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Socioeconomic risks could be reduced, as land is owned by project proponent and proponent has indicated the possibility of permanently restricting land use.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual not specified, but appears to involve "degraded" land remaining degraded.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of project and site, but additional public materials would be useful for analysis (e.g. shapefiles, species composition).',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'STRP019',
      description: 'Reforestation offset model.',
      applicant: 'Future Forest',
      rating: '1',
      keywords: '',
      location: { name: 'Scotland' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://thefutureforestcompany.com/our-forests/',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Avoids biomass emissions by burying wood waste in covered pits.',
          comment:
            'Technology has not been vetted in practice nor explored carefully in the scientific literature. Pilot pit has yet to be constructed. From a broad lifecycle perspective, successful deployment would form a carbon removal pathway when coupled to biomass production. From a narrow, project-specific lifecycle perspective, project would only avoid biogenic CO2 emissions.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 71019.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on loblolly pine waste (slash) to be stored in partially above-ground sealed pits. Total claimed volume reflects pit capacity of 71019 tCO2.',
          comment:
            'Total volume could be plausible if sufficient slash volume can be obtained. Additionally depends on validation of pit design.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.904,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on both transporation and operations, totaling 6,804 tCO2 emitted for 71,019 tCO2 stored.',
          comment:
            'Relatively few details provided. Serious analysis required around the potential for emissions to leak from pit.',
          removal: 71019.0,
          emissions: 6804.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims a range of 88% carbon permanent at 100 years to 99% permanent at 100 years.',
          comment:
            'Pits are partially above-ground. Risks of emission leakage or anaerobic decomposition not addressed comprehensively.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No commercial value to storing wood waste in pits. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 42.5,
          units: '$/tCO2',
          rating: '',
          notes:
            'Costs based on purchase of slash ($5), transportation ($5), chipping ($10), pit construction ($10.50), and verification ($12.00).',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Only publication on technique is a speculative research proposal. No demonstration projects yet.',
        },
      ],
      tags: ['biomass', 'burial'],
      id: 'STRP020',
      description: 'Carbon sequestration via logging and wood burial.',
      applicant: 'Carbon Sequestration Inc',
      rating: '1',
      keywords: '',
      location: { name: 'East Texas, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'http://carbonsequestration-inc.com/',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from forest loss and removes carbon from the atmosphere for sequestration in forest carbon.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 631845.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Improved forest management project on 8485 acres on state-owned land in Tennessee. Project is projected to generate 770543 tCO2 beneifts over 20 years, the dominant majority of which (545254 tCO2 or 71%) are avoided emissions from forest harvesting. An 18% risk buffer pool is set aside to mitigate against potential reversals, producing a net expected removal of 631845 tCO2. No specific method for calculating forest carbon benefits identified. Buffer pool calculated using American Carbon Registry methods.',
          comment:
            'Estimates of 166.7 tCO2 / ha for standing stock and 2.9 tCO2 / ha / yr for future growth fall within a highly plausible range based on USFS yield tables.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 40.7 tCO2 emitted for 631,845 tCO2 claimed. Project-level emissions mainly reflect monitoring. Removal used in ratio includes deduction of 18% buffer pool.',
          comment:
            'High ratio is consistent with similar projects. Project-level emissions are well-specified and forest carbon stocks are readily calculated.',
          removal: 631845.0,
          emissions: 40.7,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 82% likelihood of permanent storage.',
          comment:
            'Project appears to occur over 40-year period, so we report that as the permanence. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Land is owned by state-chartered entity in Tennessee, which may present a different contractual default risk compared to fully private parties but which is also required to conserve the land for multiple uses. See our comment on additionality.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is harvest of most forest carbon over the period 2018-2021.',
          comment:
            'By the end of 2020, 56% of total project climate benefits will have been earned via avoided harvest. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured. As a result, the project appears to be offering climate benefits that have already been promised to other buyers. Land is owned by a state-charted entity that is statutorily obligated to protect the land for multiple uses, of which timber is only one.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Significant project information available from multiple public sources (Stripe Climate 2020 proposal and American Carbon Registry), although digital shapefiles could not be found.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'STRP021',
      description: 'Protecting forest carbon stock at Doe Mountain.',
      applicant: 'Bluesource',
      rating: '2',
      keywords: 'Doe Mountain',
      location: { name: 'Mountain City, TN, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: {
        name: 'Website',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=398',
      },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note:
            'Added documentation columns and changed description to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in bamboo and bamboo building materials.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 19700.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on a 1000 ha pilot, using an unspecified Verified Carbon Standard protocol for calculations. Total includes both 15680 tCO2 based on reforestation and 4020 tCO2 based on storage of existing culms.',
          comment:
            'Inferred rate of 15.7 tCO2 / ha / yr for the first year of growth is high, but within the range of published allometric estimates for other bamboo species. Given large potential variability due to regional conditions, further validation would require ground measurements and/or the project-referenced VCS biomass methodology to be released in 2021.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.98,
          units: '',
          rating: 0.0,
          notes: 'Minimal information reported.',
          comment:
            'Difficult to evaluate without more information. Lack of detail on the manufacturing process raises questions about the high ratio. Frequent harvests may affect emissions.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Project projects permanence of 80 years for bamboo clumps and 50-100 years for engineered wood products.',
          comment:
            'We report 50 as the minimum of the claimed range. For standing bamboo forests, physical risk to fire may be low, but other physical and socioeconomic risks apply on this time horizon. Wood carbon stored in bamboo products, however, will be more durable than in bamboo forests.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            "Counterfactual not specified. Project appears to target degraded land and suggests alternative land uses, such as native forest plantations, might be feasible but would produce lower overall carbon removal services due to bamboo's extremely high annual productivity.",
          comment:
            'Project claims that bamboo building materials have reached parity with conventional wood products. This suggests bamboo planting may not require climate policy incentives. No analysis available of competing economics of conventional wood products or alternative land management.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 10.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of project plan. Few details avaialble around engineered lumber products. Project refers to VCS standard that has yet to be released.',
        },
      ],
      tags: ['forests', 'wood'],
      id: 'STRP022',
      description: 'Bamboo reforestation and engineered lumber.',
      applicant: 'Rizome',
      rating: '2',
      keywords: '',
      location: { name: 'Philippines' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.rizomeco.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project uses wave power to enhance weathering of olivine spread on beaches. Olivine weathering primarily results in ocean alkalization, which removes carbon from the atmosphere.',
          comment:
            'Some uncertainty around whether final form of carbon is dissolved bicarbonate or carbonate precipitates.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 200.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume projected based on total crushed olivine supply to pilot project site.',
          comment:
            'Assuming the stated ratio of 1.25 tCO2 removed per 1 tCO2 of olivine, we infer 160 t of olivine will be procured. That ratio likely an upper bound, and in genreal some uncertainty remains around the actual volume of carbon removal that is likely with this approach, requiring further work to validate.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.961,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.049 tCO2 for 1.25 tCO2 removed, including energy for mining, milling, and transport. Higher negativity ratio than other mineralization projects is due to using wave energy to displace secondary and tertiary grinding of olivine to small particles needed for carbon removal.',
          comment:
            'Boundary conditions well-specified and references documented. Project emissions are well-characterzied, but reported number depends on the successful use of waves for secondary and tertiary grinding, and on the claimed ratio of 1.25 tCO2 removed for 1 t of olivine, which is an upper bound. Thus, while the estimate is plausible, some uncertainty remains.',
          removal: 1.25,
          emissions: 0.049,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100k - 100M years.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project would only be pursued for carbon removal purposes. No intrinsic commerical value.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 50.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project details provided in public proposal with several public white papers and references. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      tags: ['mineralization', 'ocean'],
      id: 'STRP023',
      description:
        'Accelerating olivine weathering with wave power for CO2 removal.',
      applicant: 'Project Vesta',
      rating: '3',
      keywords: '',
      location: { name: 'Caribbean' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://www.projectvesta.org/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project uses bio-oil converted from biomass via fast pyrolysism and then pumped into an underground waste disposal well for geological storage.',
          comment:
            'Both components of the process are well established, and their combination has been proposed but not yet performed. Project claims bio-oil purchased is in excess capacity from supplier, and that the source sawdust would have otherwise decomposed. From a narrow lifecycle perspective, the project avoids CO2 emissions because the source sawdust from which the bio-oil was procured would have decomposed, resulting in biogenic CO2 emissions. From a broad perspective, coupling biomass production, bio-oil production, and underground injection forms a carbon removal pathway. Geological sequestration capacity could become a constraint at larger scales.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume based on the amount of bio-oil that will be procured for injection. Bio-oil production is stated as a limiting factor.',
          comment:
            'Given the stated ratio of 1.55 tCO2 for 1 t of bio-oil, we infer 6452 t of bio-oil will be procured. Assuming that amount is procured, the volume is plausible.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.773,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.34 tCO2 emitted for 1.55 tCO2 sequestered, including emissions due to bio-oil production, transporation to well, and injection.',
          comment:
            'Comprehensive LCA is pending analysis via independent consultant. Boundary conditions for process are well-specified and numbers derived from plausible, though approximate, sources.',
          removal: 1.53,
          emissions: 0.347,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims 300M based on permanence of existing crude oil in the same geological formation (Permian Basin).',
          comment:
            'Successful geological injection produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project claims bio-oil is purchased from supplier\u2019s unused, excess capacity, so would not have been used as a fossil fuel replacement. Project also claims that the source sawdust would have otherwise decomposed and would not have been used as a fossil fuel replacement. The high cost for the pilot project and the lack of inherent commercial value provide evidence of additionality. Some possibility that at larger scales bio-oil procurement would result in future expanded bio-oil production or that the future acquisition of biological feedstocks would compete with fossil fuel displacement.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 600.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Costs based on bio-oil procurement (72%), transport (18%), and injection (10%)',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project specifies process and plan in detail, and both the process components and their combination are based on existing demonstrations and published literature. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'STRP024',
      description: 'Geological sequestration of bio-oil.',
      applicant: 'Charm Industrial',
      rating: '4',
      keywords: '',
      location: { name: 'CA, USA' },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      documentation: { name: 'Website', url: 'https://charmindustrial.com/' },
      revisions: [
        { date: '05-18-2020', note: 'First release.' },
        {
          date: '05-30-2020',
          note:
            'Updated comment on mechanism, and updated comment and increased score on additionality, after project developer identified a mistake in how the report described information about the counterfactual.',
        },
        {
          date: '02-03-2021',
          note: 'Added documentation columns to match new conventions.',
        },
      ],
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in farmer owned trees.',
          comment:
            'Project partners with well-established agroforestry organizations to plant trees in agroforestry systems on small farms.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500 tCO2 removal from an unknown project area. Seller claims a 10% buffer is maintained to mitigate against reversals.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 10 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project claims to improve access to the carbon credit market for smallholder farmers, therefore ebablign a more feasible transition to agroforestry. The project is a partnership between a financial institution, two agroforestry organizations with global reach, and third-party technology providers who provide monitoring and verification services. Given a lack of public information, it is hard to analyze the aditionality of this project. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information is available for this project. The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT001',
      description:
        'Empowering smallholder farmers with agroforestry through the Acorn project. ',
      applicant: 'Co\u00f6peratieve Rabobank',
      rating: '1',
      keywords: 'Acorn',
      location: { name: 'Brazil ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.17',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.rabobank.com/en/about-rabobank/innovation/acorn/index.html?utm_campaign=5e553208da14180001c04fab&utm_content=6013de4b92a93e00014cfa13&utm_medium=smarpshare&utm_source=linkedin',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in urban trees.',
          comment:
            'Project pursues urban reforestation in Philadelphia, planting trees on private and Municipal Parks and Recreation land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2534.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 2,534 tCO2 removal over an unknown project area. A buffer pool will be used to mitigate against reversals; size and methodology are for determining the buffer pool are not specified.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 25 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "In 2019, the City of Philadephia launched a 10-year campaign to restore 30% of the city's tree canopy. More information is needed to understand the additionality of this project in relation to the city's campaign. It appears that the project proponent has full funding for the upcoming pilot project plantings. Purchasing these credits is either an investment in the maintanence of the pilot plantings or financing future projects.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information is available for this project. The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT002',
      description: 'Revitalizing Philadelphia\u2019s natural areas. ',
      applicant: 'Cambium Carbon',
      rating: '1',
      keywords: '',
      location: { name: 'Pennsylvania, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.18',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.cambiumcarbon.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes: 'Removes carbon from atmosphere for storage in soils.',
          comment:
            'Project introduces planned rotational grazing on grasslands to enable recovery of perennial grasses and increase soil organic carbon.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 3000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 3,000,000 tCO2 removal from a ~2 million ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project does not specify a strategy for mitigating against reversals.',
          comment:
            'Seller claims removal rate 0.6-1.0 tCO2/ha/yr from an increase in soil organic carbon (SOC). Project uses the SNAP model of soil carbon dynamics to estimate removal volume, trained on a set of up to 233, 20cm soil cores across the 2 million ha project area. Model is calibrated with ground-truthed sampling every 6-10 years. Given the spatial heterogeneity SOC can exhibit, and the sensitivity of measured SOC to sampling depth, we cannot validate this volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 21.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 30 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2012-2042) with 21 years remaining, which we report as the permanence. Permanence is contigent on social adherence to planned grazing patterns; historical degradation and SOC loss could reoccur with a reversion to unplanned grazing.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is continuous, unplanned grazing.',
          comment:
            'Project activities started in 2012, and all participating conservancies adopted rotational grazing by 2015. The credits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 9 years ago.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project details and carbon removal estimation methodologies are well documented.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT003',
      description:
        'Sequestering carbon through sustainable grasslands mangement in Kenya. ',
      applicant: 'NativeEnergy',
      rating: '1',
      keywords: '',
      location: { name: 'Kenya' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.19',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://native.eco/project/northern-kenya-improved-grasslands-project/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes native forests on degraded savannah and dry grasslands.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 30033.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 30,033 tCO2 removal from a 182 ha project area. A buffer pool will be used to mitigate against reversals using the VCS methodology.',
          comment:
            'Project claims removal rate 6.6 tCO2/ha/yr. More detail regarding tree species and growth assumptions would be necessary for validation.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Project-level emissions reflect planting and monitoring activities, in addition to project elecriticity, air travel for project staff, and shipping for project materials.',
          comment:
            'High ratio is consistent with similar projects. Project-level emissions and estimation methodolgies are well-specified.',
          removal: 30033.0,
          emissions: 138.75,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 25 years (2020-2045), which we report as the permanence. Seller indicates potential of longevity based on the conservation committment of the landowner.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available from application to the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT004',
      description: 'Reforestation in the Lake Albert Region of Uganda. ',
      applicant: 'Terraformation ',
      rating: '2',
      keywords: '',
      location: { name: 'Uganda ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.20',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.terraformation.com/blog/new-partner-uganda-environmental-defenders',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from combined heat and power plant, and instead captures it for geologic sequestration.',
          comment:
            'Project seeks to add carbon capture and storage to an existing biomass combined heat and power plant. Carbon will be captured from exhaust, condensed, compressed, shipped to the North Sea, and injected into bedrock. From a narrow lifecycle perspective, project only avoids CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 9000000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 9,000,000 tCO2 removal via an offtake agreement starting in 2006.',
          comment:
            'Project is still in the planning phase, and results of a feasibility study are not yet available. Seller claims the project will have a the capacity to remove 650,000 tCO2/yr, which seems feasible based on the technology. This implies that the offer is equivalent to ~14 years of operation.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating BECCS projects. Available project information indicates that lifecycle analysis includes electricity needed for carbon capture, transportation and injection. Possible uses of injection for enhanced oil recovery would affect overall lifecycle emissions. Not enough information is provided to calculate the negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Operation of the combined heat and power plant without carbon capture and storate (CCS).',
          comment:
            'This project is likely additioinal, but specifics depend on the economics of any applicable tax credits or policy incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few data on project specifics in proposal or online. No references or third-party analyses available yet for life cycle analysis.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT005',
      description: 'Negative emissions with BECCS on a CHP Plant. ',
      applicant: 'Biorecro',
      rating: '3',
      keywords: '',
      location: { name: 'Iglesta, Sweden' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.21',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'http://www.biorecro.com/?page=main' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from an ethanol plant, and instead captures it for geologic sequestration.',
          comment:
            'Project seeks to add carbon capture and storage to an existing ethanol plant. Carbon will be captured from ethonal fermentation process, condensed and dehydrated, piped one mile, and injected into bedrock. From a narrow lifecycle perspective, project only avoids CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 4000000.0,
          units: 'tCO2',
          rating: 1.0,
          notes: 'Seller offers 4,000,000 tCO2 removal.',
          comment:
            'Seller claims the project is currently removing 0.5-1M tCO2/yr, which seems feasible based on the technology. This implies that the offer is equivalent to 4-8 years of project operation. Extensive data is available for DOE-funded pilot project.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating BECCS projects. Project boundaries for lifecycle analysis include carbon capture and storage components, but not biomass sourcing, ethanol production, or ethanol use. Not enough information is provided to calculate the negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage. Ample public data is available regarding the injection site, practices and impacts.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Operation of ethanol plant without carbon capture and storage (CCS).',
          comment:
            "This project is likely additional, but specifics depend on the economics of any applicable tax credits or policy incentives. This particular carbon capture and storage project has been discussed in the context of California's Low Carbon Fuel Standard, a compliance market designed to decrease the carbon intensity of California's transportation fuel.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Extensive data available for the initial phases of this project, including the pilot injection period (2011-2014) and post-injection monitoring (2014-2021). Information regarding current operation of the CCS facility and specifics regarding the offered removal volume are lacking.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT006',
      description: 'Negative emissions with BECCS on an ethanol plant. ',
      applicant: 'Biorecro',
      rating: '3',
      keywords: '',
      location: { name: 'Decatur, IL, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.22',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'http://www.sequestration.org/mgscprojects/deepsalinestorage.html',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from the atmosphere using a liquid solvent. Captured carbon dioxide is either stored via geologic injection or used for enhanced oil recovery.',
          comment:
            'Opacity regarding the fate of captured CO2 prevents us from validating mechanism.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 250000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 250,000 tCO2 from a DAC plant that will be constructed starting in 2024.',
          comment:
            "The proposed plant is designed to capture 1M tCO2/year. A detailed schematic for a deployment of Carbon Engineering's technology at this scale was published in a peer reviewed paper from 2018, alongside data from a pilot project. If executed as modeled, the offered removal volume seems plausible. See Negativity for additional discussion on net CO2 removal.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating DAC projects, and is dependent on project-specific characteristics such the carbon intensity of the energy source and the end use of the captured CO2. There is not enough public information available to calculate negativity for this project.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Successful geological injection produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'This project is designed to be eligible for California LCFS credits, leading to concerns about double counting. If captured CO2 would be used for EOR in the case that project recieved no CDR funding, this could indicate a modified baseline scenario.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Site-specific LCA details are not publicly available.',
        },
      ],
      tags: ['dac', 'injection'],
      id: 'MSFT007',
      description:
        'Direct air capture and storage by using Carbon Engineering technology. ',
      applicant: 'South Pole ',
      rating: '2',
      keywords: 'Carbon Engineering',
      location: { name: 'Texas, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.23',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: 'Website', url: 'https://www.1pointfive.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured CO2 is mineralized in reaction with industrial waste materials to create Manufactured LimeStone.',
          comment:
            'From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a . From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 44000.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Seller offers 44,000 tCO2 from three operating facilities.',
          comment:
            'Project reports 50,000 tCO2 as an estimate of current annual volume. Mineralization rates are sensitive to the waste materials used in the reaction. Validating this volume would require more specific project parameters.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating mineralization projects. Project boundaries for lifecycle analysis include emissions related to raw materials, transport of materials, and energy used in the mineralization process. Not enough information is provided to calculate the negativity.',
          removal: 'NA',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Seller claims 50 year permanence, which is the assumed life-cycle of the manufactured limestone.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage, even after the manufactured building material is de-comissioned.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Manufactured limestone will be purchased and used separate from its carbon removal benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Publications on underlying technology are available. Specifics regarding this particular project, including public LCA insights, are lacking.',
        },
      ],
      tags: ['mineralization', 'materials'],
      id: 'MSFT008',
      description:
        'Mineralization to produce construction products by O.C.O Technology',
      applicant: 'South Pole ',
      rating: '2',
      keywords: 'O.C.O. Technology',
      location: { name: 'England' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.24',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.oco.co.uk' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project uses wave power to enhance weathering of olivine spread on beaches. Olivine weathering primarily results in ocean alkalization, which removes carbon from the atmosphere.',
          comment:
            'Some uncertainty around whether final form of carbon is dissolved bicarbonate or carbonate precipitates.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1700017.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,700,017 tCO2 net removal from deploying crushed olivine at project sites. This volume corresponds to the long-term scaling of this solution.',
          comment:
            'Assuming the stated ratio of 0.95 tCO2 net removal per t of olivine, we infer about 1.8M t of olivine will be procured. In general uncertainty remains around the actual volume of carbon removal that is likely with this approach, requiring further work to validate.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.95,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.05 tCO2 for 1 tCO2 removed, including energy for mining, milling, and transport. Higher negativity ratio than other mineralization projects is due to using wave energy to displace secondary and tertiary grinding of olivine to small particles needed for carbon removal.',
          comment:
            'Boundary conditions well-specified and references documented. Project emissions are well-characterzied, but reported number depends on the successful use of waves for secondary and tertiary grinding, and on the claimed ratio of 1 tCO2 removed for 1 t of olivine, which is conservaive in comparison to the upper bound of 1.25 tCO2 per t olivine. Thus, while the estimate is plausible, some uncertainty remains.',
          removal: 1.0,
          emissions: 0.05,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project would only be pursued for carbon removal purposes. No intrinsic commerical value.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project details provided publicly accessible, and rely on public white papers and references. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      tags: ['mineralization', 'ocean'],
      id: 'MSFT009',
      description:
        'Accelerating olivine weathering with wave power for CO2 removal.',
      applicant: 'Project Vesta',
      rating: '4',
      keywords: '',
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.25',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.projectvesta.org' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create concrete. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a waste stream. From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 90000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 90,000 tCO2, but does not specify the production facility or timeline.',
          comment:
            'Total volume combines avoided emissions from reducing use of cement in concrete production and removal from the carbonation curing process. Assuming the claimed ratio of 0.2 tCO2 avoided and 0.1 tCO2 utilized per cubic meter of concrete production, we infer the production of 30,000 cubic meters of concrete. This is a plausible production volume, but validating this breakdown would require more specific project parameters.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating mineralization projects. Not enough information is provided to calculate the negativity.',
          removal: 'NA',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Seller claims 50 year permanence, which is the assumed life-cycle of the manufactured limestone.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage, even after the manufactured building material is de-comissioned.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Cement will be purchased and used separate from its carbon removal benefits. The carbon removal benefits are being offered separately. Project claims carbon finance is needed to revisit this technology, which was decomissioned because of cost.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Some public material regaring the underlying technology is available. Project specifics, including LCA details, are not available.',
        },
      ],
      tags: ['mineralization', 'concrete'],
      id: 'MSFT010',
      description: 'Carbon negative concrete by CO2-SUICOM.',
      applicant: 'South Pole',
      rating: '2',
      keywords: 'CO2-SUICOM',
      location: { name: 'Hiroshima, Japan' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.26',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.landes.co.jp/product/113' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment: 'Project establishes native dry forests on private lands.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 3926.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 3926 tCO2 removal from a 26 ha project area. A buffer pool will be used to mitigate against reversals using the VCS methodology.',
          comment:
            'Project claims a removal rate of 6.04 tCO2/ha/yr for reforestation with the anchor species Acacia Koa. This falls within a highly plausible range based on USFS and Hawaii extension service data (2 - 10 tCO2/ha/yr).',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.99,
          units: '',
          rating: 1.0,
          notes:
            'Project-level emissions reflect planting and monitoring activities, in addition to project elecriticity, and air travel for project staff.',
          comment:
            'High ratio is consistent with similar projects. Project-level emissions and estimation methodolgies are well-specified.',
          removal: 3926.0,
          emissions: 23.09,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 25 years (2020-2045), which we report as the permanence. Seller indicates potential of longevity based on the conservation committment of the landowners.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Project focuses on reforestation on desertified lands.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available from application to the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT012',
      description:
        'Reforestation through the Hawai\u02bbi Pathfinder Project. ',
      applicant: 'Terraformation ',
      rating: '3',
      keywords: 'Hawaii Pathfinder Projects',
      location: { name: 'Hawaii, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.28',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.terraformation.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 80000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 80,000 tCO2 removal from changes in forest management over a 14,985.3 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19.2% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume. See Specifity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 94.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project must maintain carbon stocks for 100 years following the year of issuance of any carbon credit. We therefore report the permanence for the first credits issued in 2015 (94 years remaining). Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive timber harvest regime.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT014',
      description: 'Improving timberland management at Blue Creek. ',
      applicant: '3Degrees ',
      rating: '1',
      keywords: 'Blue Creek ',
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.30',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://acr2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=282',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from the atmosphere for sequestration in native vegetation.',
          comment:
            'Project discontinues agricultural activity in project area, allows for natural regeneration of native vegetation, and modifies grazing cycles to limit livestock interaction with areas of re-growth.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 175000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 175,000 tCO2 removal from allowing natural revegetation over 38,000 ha. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 25% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Project uses the FullCAM model to estimate carbon stock changes over the project lifetime, but model input parameters are not available for verification.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 24.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 24 year permanence.',
          comment:
            'Project appears to have a 25 year lifetime (2020-2045), with 24 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little project-specific detail available. Key methodologies and carbon models are cited, but input parameters are not provided.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT015',
      description:
        'Assisted regeneration through the Paroo River North Environmental Project. ',
      applicant: 'South Pole ',
      rating: '1',
      keywords: 'Paroo River North Environmental Project',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.31',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'http://www.cleanenergyregulator.gov.au/ERF/Pages/Emissions%20Reduction%20Fund%20project%20and%20contract%20registers/Project%20register/ERF-Project-Detailed-View.aspx?ListId=%7B7F242924-BF02-45EE-A289-1ABCC954E9CE%7D&ItemID=706',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project formally protects some forest in no-harvest conservation areas, and modifies commercial harvest patterns and logging practices in other areas.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500,000 tCO2 removal from fully protecting or reducing harvest over more than 3.4 million ha of productive forest land in the Great Bear Rainforest. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. Project includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Boundary conditions and emission sources well-specified. However several categories of emissions are not documented, including emissions associated with harvesting activities. Project justifies this exclusion on the basis that project emissions in these categories are expected to be less than in the baseline scenario, and thus excluding them is conservative in their net carbon benefit calculation. As a result, there is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 89.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 125 year permanence.',
          comment:
            'Project appears to be contracted for 100 year permanence (2010-2110), with 89 years remaining. Project activities are established through acts of legislation and may not be altered except through the legislative process, lending some confidence to the long-horizon of the permanence claim. See Additionality comment for consideration of trade-offs.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is significant logging throughout the project area.',
          comment:
            'It appears as though carbon finance was a key lever in the negotiations that led to the legislation establishing the project activities. Even so, the climate benefits offered by this seller are now required by law, and are therefore not additional.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT016',
      description:
        'Large-scale IFM through The Great Bear Forest Carbon Project.  ',
      applicant: 'NatureBank ',
      rating: '1',
      keywords: 'The Great Bear Forest Carbon Project',
      location: { name: 'Canada' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.32',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://carbonregistry.gov.bc.ca/br-reg/public/bc/index.jsp?entity=project&sort=project_name&dir=ASC&start=0&acronym=&limit=15&name=Great+Bear&standardId=',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 240000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 240,000 tCO2 removal from a 23,000 ac project area. Project indicates they plan to contribute to a buffer pool to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'No information regarding project contractual commitments is available. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Seller claims that the project consists of 4000 acres of actively tapped sugar maple grove, and 19,000 acres of working forests. It appears that the landowner recieved $3.8M from the USDA Forest Futures program in 2016 to establish a conservation easement over this project area. In addition, landowner has publicly stated that timber harvest is not feasible on the property until 2047-2052. It is not clear from the information available if carbon benefits offered are commensurate with these elements of the project area.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information is available for this project. The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT017',
      description: 'Improved forest management at the Big Six Forest. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Big Six Forest',
      location: { name: 'Maine, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.33',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://maineanencyclopedia.com/big-six-township/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests.',
          comment:
            'Drone technology accelerates post-forest fire reforestation.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 7324474.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers up to 7,324,474 tCO2 removal from reforestation of up to 350k acres. A 2% buffer pool will be maintained to mitigate against reversals.',
          comment:
            'The offer claims 51.71 tCO2/ha removed over an unspecified time period. According to USFS yield tables for Ponderosa Pine in the Pacific Northwest (East), this per hectare sequestation would be plausible if crediting period was 20-25 years. Volume claim assumes reforestation approach works as effectively as assumed, including seedling survival rates for which public data or publications are not yet available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Project emissions include drone fleet operation and transport, all of which are incurred during the planting phase of the project.',
          comment:
            'High ratio is consistent with similar projects. Boundary conditions are well-specified.',
          removal: 7324474.0,
          emissions: 3828.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 80.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 80 year permanence.',
          comment:
            'Physical risks are unknown as exact location of project is unknown, but could be large given coarse location Washington state. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. In addition, because funds will be used to to subsidize yet-unrealized reforestation projects, there is uncertainty as to the landowner committments and associated risks.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is reforesting manually or not at all.',
          comment:
            'This offer is an opportunity to subsidize reforestation for private landowners by buying carbon removal futures. The extent of project area and associated carbon benefits are subject to landowner decision-making. More information regarding the impact of a carbon-finance subsidy on the extent of reforestation would be useful for analyzing additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Details are provided on plan and process, but no publications or public data are available on the new technology and its performance in reforestation projects.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT018',
      description:
        'Reforestation using heavy-lift drone swarms and seed enablement. ',
      applicant: 'DroneSeed ',
      rating: '3',
      keywords: '',
      location: { name: 'Washington, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.34',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.droneseed.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from the atmosphere for sequestration in native forests.',
          comment:
            'Project assists regeneration of native forest on previously barren land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 175000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 175,000 tCO2 removal from establishing native forests over an unknown project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 25% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Project uses the FullCAM model to estimate carbon stock changes over the project lifetime, but model input parameters are not available for verification.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 23.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 24 year permanence.',
          comment:
            'Project appears to have a 25 year lifetime (2019-2044), with 23 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little project-specific detail available. Key methodologies and carbon models are cited, but input parameters are not provided.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT019',
      description: 'Assisted regeneration by the Norley Regeneration Project. ',
      applicant: 'South Pole',
      rating: '1',
      keywords: 'Norley Regeneration Project',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.35',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'http://www.cleanenergyregulator.gov.au/ERF/Pages/Emissions%20Reduction%20Fund%20project%20and%20contract%20registers/Project%20register/ERF-Project-Detailed-View.aspx?ListId=%7B7F242924-BF02-45EE-A289-1ABCC954E9CE%7D&ItemID=797',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from the atmosphere for sequestration in teak plantations.',
          comment:
            'Project establishes teak plantations on previously barren lands and completes to 25-year harvest cycles within the project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 240000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 240,000 tCO2 removal over an unknown project area in in Mexico. The offered volume is just a portion of the total carbon benefits attributed to the project. A 20% risk buffer pool is set aside to mitigate against reversals.',
          comment:
            'This group projected predicted rapid expansion from 2014-2020, however there is no documentation about its actual expansion pattern. Not knowing the project area in question, it is not possible to validate the claimed volume. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 41.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 42 year permanence.',
          comment:
            'Project lifetime appears to be 54 years (2009-2062), with 41 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued land use for cattle grazing.',
          comment:
            'Proteak, the project proponent, is the largest forestry company in Mexico. Proteak was establishing analagous teak plantations to those included in this project for seven years leading up to 2009, the beginning of the Verra crediting period, and the project did not register with Verra until 2014. This suggests that these teak plantations may not require carbon financing to be economically viable.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available for the pre-2014 project instances, but no documentation surrounding planned grouped project expansion.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT020',
      description:
        'Establishing teak plantations through the Fresh Breeze Afforestation Project. ',
      applicant: 'South Pole ',
      rating: '1',
      keywords: 'Fresh Breeze Afforestation Project',
      location: { name: 'Mexico' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.36',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'http://www.proteak.com/index.php/en/sustainability/carbon-capture',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project allows natural forest growth and performs non-commercial harvests to reduce hazards for recreational forest users.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 125295.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 125,305 tCO2 removal from a 13,536 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 16% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Project predicts a sequestration rate of 3.06 tCO2/ha/yr, which falls within a plausible range for oak-hickory hardwood forests in the Northeast according to USFS yield tables. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 36.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project appears to have a 40 year lifetime (2017-2057), with 36 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive industrial harvest regime.',
          comment:
            'Project area appears to provide significant co-benefits to the three cities who own the land, including protection of drinking water quality and recreation. The counterfactual provided, which includes clear cuts and high-grading throughout the project area, seems highly improbable.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable project detail available.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT021',
      description:
        'Increasing forest carbon through the Massachusetts Tri-City IFM. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Massachusetts Tri-City',
      location: { name: 'Mississippi, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.37',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=376',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in agricultural soil.',
          comment:
            "Project extends the Gold Standard Soil Organic Carbon Framework to include no-tillage, strip tillage, and cover cropping as activities that can produce carbon credits. Project recruits Land O'Lake farmers to implement these practices to increase soil organic carbon. Validating project mechanisms would require specific project details, which are not available.",
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100,000 tCO2 removal, and claims it will recruit farmers as needed to produce those carbon benefits. A buffer pool will be maintained to mitigate against reversals according to the Gold Standard methodology.',
          comment:
            'Validation of volume would at a minimum require information on specific projects, and documentation of methodology used to calculate removal volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. No information is provided as to the contract terms with participating farmers. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available, and methods are still in development.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT022',
      description:
        'Soil organic carbon protocol development and CDR procurement using the Truterra platform. ',
      applicant: "Land O'Lakes",
      rating: '1',
      keywords: 'Truterra',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.38',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'TruterraAg.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in agricultural soil.',
          comment:
            'Project invests in a "CDR pipeline", recuiting farmers the Truterra platform, supporting farmer adoption of soil management best practices, and developing monitoring and verification methods. Validating project mechanisms would require specific project details, which are not available.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1858750.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,858,750 tCO2 removal, and claims it will recruit farmers and develop the monitoring and verification technology as needed to produce those carbon benefits. The offered volume is just a portion of the total carbon the project estimates it will generate. A buffer pool will be maintained to mitigate against reversals according to the Gold Standard methodology.',
          comment:
            'Validation of volume would at a minimum require information on specific projects, and documentation of methodology used to calculate removal volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. No information is provided as to the contract terms with participating farmers. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'This offer may be better understood as an opportunity to invest in the Truterra platform rather than the purchase of a specific quantity of carbon removal. Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available, and methods are either not publicly available or currently under review.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT023',
      description:
        'Pipeline development for soil organic carbon CDR at scale using the Truterra platform. ',
      applicant: "Land O'Lakes",
      rating: '1',
      keywords: 'Truterra',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.39',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'TruterraAg.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project performs single tree harvest over 10% of the project area to maintain recreational trails, and is credited in comparison to an aggressive industrial harvest regime.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 114144.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 114,144 tCO2 removal from a 8485.58 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 18% buffer of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Project projects 5.6 tCO2/ha/yr of carbon removal and estimates a maximum of 599 tCO2/ha in standing stock. The growth rate is plausible based on USFS yield curves, but the maximum standing stock estimate seems high. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 36.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2017-2057), with 36 years remaining which we report as the permanence. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Land is owned by state-chartered entity in Tennessee, which may present a different contractual default risk compared to fully private parties but which is also required to conserve the land for multiple uses. See our comment on additionality.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive industrial harvest regime.',
          comment:
            'By the end of 2021, 76% of total project climate benefits will have been earned, the majority via avoided harvest. Many of these benefits have already been sold. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured. As such, the project appears to be offering climate benefits that have already been promised to other buyers. Land is owned by a state-charted entity that is statutorily obligated to protect the land for multiple uses, of which timber is only one.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources (ACR registry, Stripe Climate 2020 proposal, Microsoft 2021 Carbon Removal RFP).',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT024',
      description: 'Public access forestry at Doe Mountain. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Doe Mountain ',
      location: { name: 'Tennessee, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.40',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=398',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Avoids emissions by re-wetting peat soils.',
          comment:
            'Project pays farmers to convert dry-crop agricultural land to rice paddies or to wetland habitat. Validating project mechanisms would require specific project details, which are not available.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 550.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500 tCO2 removal from an unspecified project area. The offered volume is just a portion of the total carbon benefits the project estimates it will generate. A buffer pool will be maintained to mitigate against reversals according to the ACR methodology.',
          comment:
            'Validation of volume would at a minimum require information on specific projects, and documentation of methodology used to calculate removal volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. No information is provided as to the contract terms with participating farmers. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available.',
        },
      ],
      tags: ['soil', 'conversion'],
      id: 'MSFT025',
      description:
        'Re-flooding California\u2019s Sacramento Delta to stop subsidence and sequester carbon. ',
      applicant: '3Degrees',
      rating: '1',
      keywords: '',
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.41',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/restoration-of-california-deltaic-and-coastal-wetlands',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project plants Cypress and China fir forests on previously barren land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 300000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 300,000 tCO2 removal from a 22,449 ha project area planted with cypress and China fir. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer only carbon benefits generated before the end of 2021. Project predicts a carbon removal rate of 1.45 tCO2/ha/yr over its first 7 years (2014-2021). This falls within a highly plausible range.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Project methodology assumes negligible project emissions. Thus, there is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 24.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 24 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2014-2044), with 24 years remaining from date of review which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is project land remaining barren.',
          comment:
            "Planting was completed in 2015, 4 years before registration as a carbon offset project. Moreover, project occurs in a region highly relevant to the Chinese government's reforestation goals and ongoing programs (e.g. Green for Grain). More information about why this project in ineligible for state-available funding would be needed to be confident about the additionality of this project.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT026',
      description:
        'Afforestation and sustainable development through the Xiguan Afforestation Project.',
      applicant: 'Shell Energy North America',
      rating: '2',
      keywords: 'Xiguan Afforestation Project',
      location: { name: 'Guizhou Province, China' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.42',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1865',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project claims to be a removal-only IFM. By definition, IFM projects incorporate an element avoided emissions through modified harvest, so we report this project as both removal and avoided. See Specificity comment for further discussion.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 480000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 480,000 tCO2 removal from a ~37,000 project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Seller claims carbon benefits are generated from the natural regeneration of project land. More information about the baseline scenario against which the project is credited would be needed to verify additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key details about project activities or the methodology for calculating carbon benefits.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT028',
      description: 'Improved forest management at the Baskahegan Forest. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Baskahegan ',
      location: { name: 'Maine, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.44',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://baskahegan.com/maps/baskahegan-land-map/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 190000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 190,000 tCO2 removal from a 3,200 ac project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project land is owned by the Nisqually Land Trust, a non-profit conservation organization. More information about the baseline and project scenarios used to credit the project would be needed to verify additionality. Special attention should be to the claimed baseline harvest scenario with reference with the Nisqually Land Trust mission and management plans. Project may be better understood as a donation to conservation rather than additional carbon removal.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT029',
      description:
        'Improved forest management through the Rainier Gateway Initiative. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Rainier Gateway ',
      location: { name: 'Washington, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.45',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://nisquallylandtrust.org/our-lands-and-projects/protected-areas/mount-rainier-gateway-initiative/#:~:text=The%20Land%20Trust%20launched%20the,forest%20that%20surrounds%20the%20town.',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in agricultural soil.',
          comment:
            'Project develops the capacity to credit farmers who are a part of the Truterra network and have reduced tillage and/or used cover cropping in the last several years. Validating project mechanisms would require specific project details, which are not available.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100,000 tCO2 removal from farmland that is identified as having implement specified soil enrichment practices since 2018. Project anticipates delivering 100,000 tCO2 removal will require identifying 200,000-250,000 acres of farmland.  A buffer pool will be maintained to mitigate against reversals according to the ACR methodology.',
          comment:
            'Validation of volume would at a minimum require information on specific projects, and documentation of methodology used to calculate removal volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. No information is provided as to the contract terms with participating farmers. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project appears to seek crediting for soil management changes that happened before the presence of carbon financing. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available, and methods are either not publicly available or currently under review.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT030',
      description: 'Soil organic carbon CDR using the Truterra platform. ',
      applicant: "Land O'Lakes",
      rating: '1',
      keywords: 'Truterra',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.46',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'TruterraAg.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 230000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 230,000 tCO2 removal from a 13,000 ac project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project land is owned by the Columbia Land Trust, a non-profit conservation organization. More information about the baseline and project scenarios used to credit the project would be needed to verify additionality. Special attention should be to the claimed baseline harvest scenario with reference with the Columbia Land Trust mission and management plans. Project may be better understood as a donation to conservation rather than additional carbon removal.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT032',
      description:
        'Land trust forestry project through the Columbia Improved Forest Management Project. ',
      applicant: 'Blue Source',
      rating: '1',
      keywords: 'Columbia ',
      location: { name: 'Washington, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.46',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.columbialandtrust.org/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from the atmosphere for sequestration in teak plantations.',
          comment:
            'Project establishes teak plantations on previously barren lands and completes to 18-year harvest cycles within the project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 537989.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 537,989 tCO2 removal over an unknown project area in Mexico. The offered volume is just a portion of the total carbon benefits attributed to the project. An 14% risk buffer pool is set aside to mitigate against potential reversals.',
          comment:
            'The actual area planted as a result of this grouped project is not clear. Thus, it is not possible to validate the claimed volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 28.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 93 year permanence.',
          comment:
            'Project lifetime appears to be 36 years (2013-2049), with 28 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued degradation from agricultural use.',
          comment:
            'Teak plantations may not require carbon financing to be economically viable.  Credited project activities started in 2013, but project did not register to recieve carbon credits until 2018.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable project detail available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT033',
      description: 'Establishing teak plantations. ',
      applicant: 'South Pole ',
      rating: '1',
      keywords: '',
      location: { name: 'Mexico' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.49',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1740',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 40558.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 40,488 tCO2 removal from a 10,088 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 18% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume.  Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 88.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project appears to opperate with a committment to maintain project for 100 years (2009-2109), with  88 years remaining. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive industrial harvest regime.',
          comment:
            'By the end of 2019, 94% of total project climate benefits were earned, the vast majority via avoided harvest. Many of these benefits have already been sold. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured. As such, the project appears to be offering climate benefits that have already been promised to other buyers.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT034',
      description: 'Improved forest management at Winston Creek Forest. ',
      applicant: '3Degrees',
      rating: '1',
      keywords: 'Winston Creek Forest',
      location: { name: 'Washington, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.50',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://acr2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=389',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1930000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,930,000 tCO2 removal from an unspecified project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project land is opperated as a guest ranch, and marketed as a premier eco-tourism destination. More information about the baseline harvest scenario used to credit the project would be needed to verify additionality. Special attention should be to the claimed baseline in the context of ongoing land use.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT035',
      description: 'Improved forest management at Vermejo Park Ranch. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: 'Vermejo Park Ranch',
      location: { name: 'New Mexico, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.51',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://tedturnerreserves.com/vermejo/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions by discouraging deforestation and forest degradation.',
          comment:
            'Project activities include forest management changes, increased protections against illegal harvesting, and a number of social and economic interventions in surrounding communites to decrease illegal harvest pressure (e.g. introduction of efficient cookstokes and development of local enterprises). Project is credited against a projection of continued mosaic deforestion.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 673053.0,
          units: 'tCO3',
          rating: 0.0,
          notes:
            'Seller offers 673,053 tCO2 removal from a 169,136 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            "Seller claims to offer removal only. Project's estimated removal volume is based on an multi-layered set of assumptions about deforestation drivers that are hard to verify. Moreover, since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. Project includes carbon removal attributed to soil.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 18.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2009-2039), with 18 years remaining which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is continued mosaic-type deforestation.',
          comment:
            'Project operated for five years with international funding (including USAID) before seeking carbon finance. Several of the project interventions were to projected to be completed before 2020. Additionally, many of these carbon benefits from this project have already been sold. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from project registry.',
        },
      ],
      tags: ['forests', 'redd+'],
      id: 'MSFT036',
      description:
        'Co-management of protected areas through the Kulera Landscape REDD+ Program. ',
      applicant: 'Terra Global Capital',
      rating: '1',
      keywords: 'REDD+, Kulera',
      location: { name: 'Malawi ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.52',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'http://terraglobalcapital.com/kulera-landscape-redd-program-co-managed-protected-areas-malawi',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project plants Cypress and China fir forests on previously barren land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 400000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 400,000 tCO2 removal from a 32,047 ha project area planted with Cypress and China fir. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer only carbon benefits generated before the end of 2021. Project predicts a carbon removal rate of 1.53 tCO2/ha/yr over its first 7 years (2014-2021). This falls within a highly plausible range.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Project methodology assumes negligible project emissions. There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 24.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 24 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2014-2044), with 24 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is project land remaining barren.',
          comment:
            "Planting was completed in 2015, 4 years before registration as a carbon offset project. Moreover, project occurs in a region highly relevant to the Chinese government's reforestation goals and ongoing programs (e.g. Green for Grain). More information about why this project in ineligible for state-available funding would be needed to be confident about the additionality of this project.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT037',
      description:
        'Afforestation and sustainable development through the Qianxinan Afforestation Project. ',
      applicant: 'Shell Energy North America',
      rating: '2',
      keywords: 'Qianxinan',
      location: { name: 'Guizhou, China' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.53',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1847',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 210000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 210,000 tCO2 removal from a 13,000 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment. Project land is owned by the Elliotsville Foundation, and appears to be operated to maintain year-round recreational use on the property. More information about the baseline and project harvest scenarios used to credit the project would be needed to verify additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT038',
      description: 'Improved forest management at the 100 Mile Wilderness. ',
      applicant: 'Blue Source ',
      rating: '1',
      keywords: '100 Mile Wilderness',
      location: { name: 'Maine, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.51',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment: 'Project plants a combination of teak and native species.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 650000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 650,000 tCO2 removal from plantations established over 7064 ha planting area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project maintains 20% buffer to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 3.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (1995-2025), with 3 years remaining from the date of review, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued land use for pasture, annual crops, or cocao farms without tree cover.',
          comment:
            'Project claims historical offset credits from project activity starting in 1995. Project was registered as an offset project in 2012. It is unclear that carbon finance will change land management moving forward.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information available. Links to key project documents are broken.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT039',
      description:
        'Removing carbon through sustainable teak and natural ecosystem protection by CO2OL. ',
      applicant: 'South Pole ',
      rating: '1',
      keywords: 'CO2OL Tropical Mix',
      location: { name: 'Panama' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.55',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.goldstandard.org/projects/details/1796',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 80732.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 80,732 tCO2 removal from a ~22,000 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool will be used to mitigate against reversals using the ACR methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment. More information about the baseline and project harvest scenarios used to credit the project would be needed to verify additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT041',
      description:
        'Preventing aggressive timber harvesting through the Greenleaf IFM. ',
      applicant: 'Blue Source',
      rating: '1',
      keywords: 'Greenleaf ',
      location: { name: 'Michigan, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.57',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project primarily establishes teak plantations and completes two, 20-year harvest cycles within the project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 150000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 150,000 tCO2 removal over an unknown project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'This grouped project predicted an expansion of 1000 ha/year from 2014 through 2030. There there is no documentation about its actual expansion pattern. Not knowing the project area in question, it is not possible to validate the claimed volume. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 27.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 28 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2008-2048), with 27 years remaining from date of review, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is a continuation of a mosaic of illegal subsistence farming, grassland with scattered trees, and degraded remnant forest.',
          comment:
            'Project is implemented on forest reserves declared degraded by the Ghanian governement. Legally, this is a protected area with some sustainable use of natural resources. Project proponent began establishing plantations in these reserves in 2008, but did not apply to recieve carbon credits until 2013.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable project detail available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT042',
      description:
        'Reforestation and sustainable development in forest reserves. ',
      applicant: 'Shell Energy North America ',
      rating: '1',
      keywords: '',
      location: { name: 'Ashanti, Ghana' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.58',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/987',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project establishes no-harvest conservation easements to permanently protect participating forests.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 177975.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 177,975 tCO2 removal from a unspecified project area. The offered volume is just a portion of the total carbon benefits attributed to the project. An 16% buffer pool is maintained to mitigate against reversals.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'All lands enrolled in this grouped project are permanently protected upon enrollment by a no-harvest conservation easement.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project proponent is a non-profit that uses carbon revenues as an incentive to establish permanent, no-harvest conservation easements on properties owned by land trusts in the Northeast.  More information about the baseline scenario used to credit this project would be needed to verify additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "The project's general plan, financial structure, and partnership structure are clearly communicated. Details on lands enrolled and crediting methodogies are not publicly available.",
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT043',
      description:
        'CDR from aggregated protected wilderness through the Forever Wild Carbon Aggregation Initiative.',
      applicant: 'Spatial Informatics Group',
      rating: '3',
      keywords: 'Forever Wild Carbon Aggregation Initiative',
      location: { name: 'Vermont, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.59',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://newildernesstrust.org/wilderness-conservation/wp/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 20000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 20,000 tCO2 removal over a 1422 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project maintains 16.7% buffer pool to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 92.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 93 year permancence.',
          comment:
            'Project lifetime appears to be 100 years (2013-2113), with 92 year remaining from date of review. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "Rip's Redwood project already credited for standing carbon stock above regional baseline, which indicates a promise not to harvest normally and therefore raises questions about the additionality of ongoing carbon removal credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT045',
      description:
        "Reforestation with verification and monitoring in Rip's Redwoods. ",
      applicant: 'Pachama',
      rating: '1',
      keywords: "Rip's Redwoods",
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.61',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://pachama.com/explorer/project/rips-redwoods',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 159188.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 159,188 tCO2 removal over a 8,951 acre project area. No information about a buffer pool is publicly available.',
          comment:
            'See Specificity comment. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Although project provides an official ACR ID, project does not appear in the public database.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT046',
      description:
        'Improved forest management through the Shaan Seet IFM project. ',
      applicant: 'Blue Source',
      rating: '1',
      keywords: 'Shaan Seet',
      location: { name: 'Alaska, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.62',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from the atmosphere using a solid chemical sorbent. Captured carbon dioxide is geologically sequestered in mineral form using the Carbfix process.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 300.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Project specifies 3,000,000 as a total volume but 300 as a volume for FY2021. We interpret the smaller value as the volume for the currrent proposed project, as the larger number likely reflects the potential scale of the technology.',
          comment:
            'Scale of volume is commensurate with published sorbent technology. Technology can be deployed on a modular basis.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 1.0,
          notes:
            'Claims total emissions are 0.1 tCO2 for every 1 tCO2 removed.',
          comment:
            'Detailed analysis references an independent, third party financed study performed by researchers at the University of Aachen, Germany, based on Climeworks Life Cycle Inventory for a 3000tCO\u2082 Mt/y plant being commissioned in 2020.',
          removal: 1.0,
          emissions: 0.1,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits. New investments may relate to future deployments rather than current procurements.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Publications on LCA are pending. Publications or public datasets on specific approaches are not yet available.',
        },
      ],
      tags: ['dac', 'mineralization'],
      id: 'MSFT047',
      description: 'Direct air capture and mineralization.',
      applicant: 'Climeworks',
      rating: '5',
      keywords: '',
      location: { name: 'Reykjavik, Iceland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.63',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: 'Website', url: 'www.climeworks.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project assists plants indigeneous tree species and assists natural regeneration in Kibale National Park.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 55000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 55,000 tCO2 removal from a 6212 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project predicts a carbon removal rate of 12.38 tCO2/ha/yr over the project lifetime. We were unable to find a third party validation of this high removal rate.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 48.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 48 year permanence.',
          comment:
            'Project lifetime appears to be 60 years (2009-2069), with 48 years remaining. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued encroachment on national park land for agricultural activities, unchecked fire on degraded land, and a partial regeneration of pioneer begetation.',
          comment:
            'Project activities started in 1994, a year after it the area was designated as a national park. The project registered for carbon offset credits with Verra in 2011, and projected that forest planting would be complete by 2016. More documentation would be needed to verify the claim that the project activities would not continue in the absence of carbon finance.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT048',
      description: 'Restoration of degraded areas in Kibale National Park. ',
      applicant: 'South Pole ',
      rating: '1',
      keywords: 'Kibale National Park',
      location: { name: 'Uganda' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.64',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://facethefuture.com/projects/uganda-kibale-reforestation',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass-fuelled power station, and instead captures it for alternative uses.',
          comment:
            'Project seeks to add carbon capture and storage to operating biomass power plants, injecting some of the captured CO2 into geological formations. From a narrow lifecycle perspective, project only avoids CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 4000000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 4,000,000 tCO2 removal from operation of a CCS system that should be operational by 2027.',
          comment:
            "Project plans to install CCS on four biomass power plant units. Each 0.66GW unit with CCS is project to capture up to 4 million tCO2/year, which seems feasible based on the technology and size of plant. Two pilot projects are currently underway.  Note that the value of captured CO2 is contingent on it's storage or end-use. It is not clear that this entire volume will be geologically sequestered. See permanence comment for additional discussion.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating BECCS projects. Project uses an open souce Biomass Carbon Calculator (developed by project proponent and verified by third parties) to to perform LCA. Parameters used by project proponent are not available, and there is not enough to calculate the negativity of this project.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Seller claims captured CO2 will be injected into deep geological depositis. Successful geologic sequestration produces reliable, effectively permanent carbon storage. However, it appears that the project is also exploring less permanent, more profitalbe end-uses for captured CO2.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Operation of biomass power plant without carbon capture and storage (CCS).',
          comment:
            'This project is likely additional, but specifics depend on the economics of any applicable tax credits or policy incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project details available from project application on online reports. LCA and storage details are lacking.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT049',
      description: 'BECCS at the world\u2019s largest biomass power station.',
      applicant: 'Drax ',
      rating: '2',
      keywords: '',
      location: { name: 'United Kingdom' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.65',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'http://www.drax.com/BECCS' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment: 'Project plants a combination of teak and native species.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500,000 tCO2 removal from plantations established over a claimed 13,242 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project maintains 20% buffer to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 3.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 5 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (1995-2025), with 3 years remaining from the date of review, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued use for pasture, annual crops, or cocao farms without tree cover.',
          comment:
            'Project claims historical offset credits from project activity starting in 1995. Project was registered as an offset project in 2012. It is unclear that carbon finance will change land management moving forward.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information available. Links to key project documents are broken.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT050',
      description:
        'Removing carbon through sustainable teak and natural ecosystem protection by CO2OL. ',
      applicant: 'Pachama',
      rating: '1',
      keywords: 'CO2OL Tropical Mix',
      location: { name: 'Panama' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.66',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.goldstandard.org/projects/details/1796',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 383152.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 383,152 tCO2 removal over a 19,856 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 18% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 37.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2018-2058), with 37 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive industrial harvest regime.',
          comment:
            "There was no ongoing or planned commercial harvest in the project area at the time of application, and project scenario does not include any commercial harvesting. More information would be needed to verify the baseline harvest scenario and thus, the additionality of the project's purported carbon benefits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT051',
      description:
        'Improved forest management through the Kootznoowoo IFM Project. ',
      applicant: 'Blue Source',
      rating: '1',
      keywords: 'Kootznoowoo IFM Project',
      location: { name: 'Alaska, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.67',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=499',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in harvested forest and avoids emissions associated with forest conversion.',
          comment:
            'Project establishes Acacia, Pine and Eucalyptus plantations.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 200000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 200,000 tCO2 removal from reforestation activity over a 13,205 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project does not specify a mechanism to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2006-2036), with 15 years remaining. Since seller reports a lower permanence value, we report that.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued cattle ranching on degraded savannah lands.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information available. Links to key project documents are broken.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT052',
      description:
        'Sustainable forestry development through the Vichada Climate Reforestation Project. ',
      applicant: 'ClimateCare Oxford',
      rating: '2',
      keywords: 'Vichada Climate Reforestation Project',
      location: { name: 'Vichada, Colombia ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.0',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.goldstandard.org/projects/details/1806',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 5000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 5,000 tCO2 removal over a 2216 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Project estimates net CO2 removal based on four tree classes. The TIST project allows farmers in each of the 2860 project areas to choose which species of tree to plant on their land. Independed volume validation would require documentation of tree species actually established and some claim regarding crediting time period.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 12.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 13 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2004-2033), with 12 years remaining from the date of review, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project activities started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of carbon credits from that period of time.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design and early instances of this grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT053',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in India. ',
      applicant: 'Shell Energy North America',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'India' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.68',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://program.tist.org/india' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for storage in soils.',
          comment:
            'Project provides upfront capital and ongoing payments for ranchers to implement planned grazing to increase soil organic carbon. Grazing strategies include increased grazing intensity and increased periods of rest and regrowth. We cannot verify the mechanism as the proposal lacks specificity regarding what activities are actually credited.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1500000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,500,000 tCO2 removal from a project that currently spans 33,292 acres, but could expand in the future. Project does not specify a strategy for mitigating against reversals.',
          comment:
            'This is a grouped project, and it appears as though the offered volume depends on project expansion. The available project documentation provides information for a 13,473 ha project area and a total projected net carbon benefit of 445,964 tCO2. The claimed sequestration rate is 1.65 tCO2/ha/yr. Project uses the SNAPNA model of soil carbon dynamics to estimate removal volume, but input parameters and training data characterics are not publicly available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 18.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 30 year permanence.',
          comment:
            'Project lifetime appears to be 20 years (2019-2039), with 18 years remaining, which we report as the permanence. Permanence is contigent on rancher adherence to planned grazing patterns. Historical degradation and SOC loss could reoccur with a reversion to common practice grazing patterns.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Partial documention is available for a portion of the offered credits. This grouped project is still in development with Verra, and project documentation available through the registry is is only partially complete. Carbon removal estimation methodologies are not publicly documented.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT054',
      description:
        'Soil carbon sequestration through the Montana Improved Grazing Project. ',
      applicant: 'NativeEnergy',
      rating: '1',
      keywords: 'Montana Improved Grazing Project',
      location: { name: 'Montana, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.69',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://native.eco/project/montana-grasslands-projecthb/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment: 'Project primarily establishes teak plantations.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 5000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500,000 tCO2 removal from plantations established over 7064 ha planting area. Project does not specify a mechanism to mitigate against reversals.',
          comment:
            'Not enough information available to verify the volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 11.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 11 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is a continuation of land in a degraded pasture state.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Although this project appears in the Gold Standard registry, the link to project documents is broken. Almost no public information is available to verify project details.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT057',
      description:
        'Supporting local farmers by creating new sustainable timber plans. ',
      applicant: 'Pachama',
      rating: '2',
      keywords: '',
      location: { name: 'Nicaragua' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.72',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://pachama.com/explorer/project/nicaforest',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 104000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Project offers 104,000 tCO2 removal from a 8,619 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 18% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 37.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2018-2058), with 37 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is an aggressive industrial harvest regime.',
          comment:
            "There was no ongoing or planned commercial harvest in the project area at the time of application, and project scenario does not include any commercial harvesting. More information would be needed to verify the baseline harvest scenario and thus, the additionality of the project's purported carbon benefits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT059',
      description:
        'Improved forest management through the Klawock Heenya IFM project. ',
      applicant: 'Blue Source',
      rating: '1',
      keywords: 'Klawock Heenya',
      location: { name: 'Alaska, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.74',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=459',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment:
            'Project establishes mixed-species timber plantations in partnership with small-scale farmers.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 50,000 tCO2 removal from plantations established over 586.23 ha in Honduras. The offered volume is just a portion of the total carbon benefits attributed to the project. Project maintains 20% buffer to mitigate against reversals.',
          comment:
            'Project features 14 timber species and four plantation models. There is not enought information about project implementation to verify volume. See specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 41.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Project lifetime appears to be 50 years (2012-2062), with 41 years remaining, which we report at the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued use for pasture, annual crops, or cocao farms without tree cover.',
          comment:
            'Project documentation indicates that plantations were established from 2012-2018, and that timber harvest would become profitable sometime between 2020 and 2025. The project did not register to recieve carbon credits until 2019. More information would be necessary to make the case the carbon finance is necessary to ensure continued plantation growth.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information available. Project indicates plans for expansion in project documentation, but does not provide details.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT061',
      description:
        'Community reforestation and agroforestry through the Aprosacao Reforestation Project.',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Aprosacao Reforestation Project, PUR Projet',
      location: { name: 'Honduras' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.1',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.purprojet.com/project/aprosacao/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 80000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 80,000 tCO2 removal over 8634.8 ha project area. This is a combined offer from four sub-projects in Kenya, and the offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Project estimates net CO2 removal based on four tree classes. The TIST project allows farmers to choose which species of tree to plant on their land. Validation of volume would require documentation of tree species actually established.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 12.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 13 year permanence.',
          comment:
            'Project lifetimes appear to be 30 years. The earliest of the four projects was established in 2004 and has 12 years remaining from the date of review. We report 12 years as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "Project claims that 70% of carbon credit profits are directed to the farmers who own the trees, plausibly changing the incentive structure around their land use. TIST Kenya started in 2004, but did not register to recieve carbon credits until 2011. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of the project's historical carbon credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design and early instances of this grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT062',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Kenya. ',
      applicant: 'Shell Energy North America ',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Kenya' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.76',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://program.tist.org/kenya' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment: 'Project establishes bald cypress trees.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 5000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 5,000,000 tCO2 removal. No information is provided regarding measures to mitigate against reversals.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'See Specificity comment. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual provided.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Although this project is listed in the Climate Forward registry, no project documentation is available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT063',
      description:
        'Reforestation in the Pointe-aux-Chenes Wildlife Management Area. ',
      applicant: 'ClimeCo ',
      rating: '1',
      keywords: 'Pointe-aux-Chenes Wildlife Management Area',
      location: { name: 'Louisiana' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.77',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://climateforward.apx.com/myModule/rpt/myrpt.asp?r=111',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emission by combatting unplanned deforestation.',
          comment:
            'Project activities include encouraging sustainable developent and land use planning in surrounding communities, ensuring more effective forest monitoring, and establishing a trust fund of accumulated carbon revenues to continue protection activities beyond the carbon project lifetime.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 350000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 350,000 tCO2 removal from a 68,515 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 21.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project appears to have a 30 year lifetime (2012-2042), with 21 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is the conversion of forest by smallholder agriculturalists.',
          comment:
            'Project explictly communicates that carbon benefit revenues would be accumulated in a trust fund to ensure future protection. The project area is formally protected as a national park, which calls into question the additionality of further carbon payments.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design. More information needed to validate the claimed efficacy of the sustainable development interventions for reducing unplanned deforestation pressure.',
        },
      ],
      tags: ['forests', 'redd+'],
      id: 'MSFT064',
      description:
        'Conservation, carbon sequestration and community development through the Gola Rainforest REDD project. ',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'REDD, Gola',
      location: { name: 'Sierra Leone' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.78',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://golarainforest.org/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes mixed cottonwood and native hardwood forests.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 25000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 25,000 tCO2 removal from a project area of unknown acreage. The offered volume is just a portion of the total carbon benefits attributed to the project. A 20.5% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project claims a removal rate of 12.4 tCO2/ha/yr.  This falls on the high end of the plausible range provided by USFS yield tables (6.6 - 13.5 tCO2/ha/yr). The total area of this grouped project is not clearly reported, thus volume offered cannot be validated. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 27.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 27 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2008-2048), with 27 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of agricultural activity.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available for early instances of the program. Verified public information about the current state of the project\u2013including the total area of land enrolled\u2013is lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT065',
      description:
        'Restoring native forest ecosystems in the Mississippi Alluvial Valley through the GreenTrees ACRE program.',
      applicant: 'Shell Energy North America',
      rating: '1',
      keywords: 'GreenTrees ACRE (Advanced Carbon Restored Ecosystem)',
      location: { name: 'Mississippi Alluvial Valley, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.79',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://green-trees.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment:
            'Project establishes Pine and Eucalyptus plantations with claimed growth enhancement from mycorrhizal innoculation. Project completes two 20 year harvest rotations of Pine and four 10 year harvest cycles for Eucalyptus during project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 5000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers up to 5,000,000 tCO2 removal via an expansion of an existing project.  A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Project claims removal rate of 23.9 tCO2/ha/yr for Pinus radiata which is well above published ranges (15-21 tCO2/ha/yr). Project claims 21.7 tCO2/ha/yr removal for Eucalyptus globulus, which falls on the high end of published ranges (13-23 tCO2/ha/yr).  This pattern may be explained by the claimed growth enhancement as a result of mycorrhizal innoculation (41.% and 47% respectively), but there is not sufficient public information to verify the efficacy of the innoculant. Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of degraded grassland.',
          comment:
            'This offer is an invitation for Microsoft to fund the expansion of an existing project into new project area.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available. Third party verification of innoculant efficiacy lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT066',
      description:
        "Establishing plantations in Chile using Mikro-Tek's proprietary mycorrhizal innoculation technology. ",
      applicant: 'ClimateCare Oxford ',
      rating: '1',
      keywords: 'Mikro-Tek',
      location: { name: 'Chile' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.80',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1055',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 157000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 157,000 tCO2 removal from a grouped project that currently includes 27,338 acres of harvested forestland. Seller offers 17,000 tCO2 removal generated during 2020,and 140,000 tCO2 removal to be generated over the next three years. The three current instances of this project are located in Oregon, but the grouped project may add instances in Washington or California as well. A 25-27% risk buffer (dependent on the geography of the project instance) is maintained to mitigate against reversals.',
          comment:
            "Seller does not specify if removal sold will be generated from exiting project instances or from instances added in future years. Since project instances with very different forest types can be added to this grouped project with little public documentation, it's not possible to verify this volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project will not be sold again in the future.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 19.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 30 year permanence.',
          comment:
            'Each instance of this grouped project operates with a unique 30 year lifetime. The first instance was added in 2010 and has 19 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is maximizing net present value for forest owners with 30-35 year old commercial clear cuts, removing all merchantable trees.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available for the three existing project instances. No information available for planned group project expansion.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT067',
      description:
        'Enabling climate-smart forestry through the EFM IFM Project. ',
      applicant: 'Ecotrust Forest Management',
      rating: '2',
      keywords: '',
      location: { name: 'Oregon, Washington, & California USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.81',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://efmi.com/management-approach/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes teak plantations and encourages the natural regeneration of native species.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 10,000 tCO2 removal from a 1096.25 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Growth estimates are taken from the IPCC Guidelines for National greenhouse Gas Inventories (2006).',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 18.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 19 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (1999-2039), with 18 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued state of degraded cropland or grassland subject to grazing activities.',
          comment:
            'According to project documentation, reforestation in this project area started in 1999. Planting was completed in 2003. The project did not register to generate carbon offset income until 2011, and many of the historic carbon benefits have already been sold with the promise of permanence until the end of the project term in 2032. This calls into question the additionality of further carbon payments.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT071',
      description: 'Multi-species reforestation project. ',
      applicant: 'Pachama',
      rating: '1',
      keywords: '',
      location: { name: 'Brazil ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.85',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://pachama.com/explorer/project/la-fazenda',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests and trees in agroforestry systems.',
          comment:
            'Project pursues native species restoration on 10,000 ha, and plants trees on 5,000 ha of farmer-owned land converted to agroforestry systems.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 9000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 9,000,000 tCO2 removal from a ~15,000 ha project area. A buffer pool will be maintained to mitigate against reversals following the VCS methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 30.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 30 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project land is owned by the Elliotsville Foundation, and appears to be operated to maintain year-round recreational use on the property. More information about the baseline and project harvest scenarios used to credit the project would be needed to verify additionality. Special attention should be to the claimed baseline in the context of ongoing land use.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT072',
      description:
        'Carbon dioxide removal through agroforestry and reforestation. ',
      applicant: 'Tree Global',
      rating: '1',
      keywords: '',
      location: { name: 'Ghana' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.86',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.restorationcarbon.org' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 20000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 20,000 tCO2 removal over a 777.1 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Project estimates net CO2 removal based on four tree classes. The TIST project allows farmers to choose which species of tree to plant on their land. Validation of volume would require documentation of tree species actually established.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 11.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 12 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2003-2032), with 11 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "Project claims that 70% of carbon credit profits are directed to the farmers who own the trees, plausibly changing the incentive structure around their land use. TIST Uganda started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of the project's historical carbon credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable details provided on project design.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT073',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Uganda. ',
      applicant: 'Pachama',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Uganda ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.87',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://program.tist.org/uganda' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in agricultural soil, and avoids emissions through modified agricultural practices.',
          comment:
            'Project claims carbon benefits from no-till farming, crop rotations, use of composts and manure, and use of livestock to enhance crop residue recovery. Validating project mechanisms would require specific project details, which are not available.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 15000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 15,000 tCO2 removal over an unspecified project area. The offered volume is just a portion of the total carbon the project estimates it will generate.',
          comment:
            'Volume is calculated using the COMET-Farm model, however input parameters are not available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. Nori requires a 10-year contractual commitment from its projects, which is a reasonable timeframe given bankruptcy and default risks.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'The participating farmer implemented no-till practices in 2012, modified fertilizer application practices in 2015, and started using compost in 2016, all in the apparent absence of carbon finance. The farmer claims a more than 2x improvement to yeilds as a result of these management changes. This calls into question the additionality of current carbon payments.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Specificity around credited activities, participating lands, and volume estimation methodology is not publicly availabe.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT074',
      description:
        'Soil carbon sequestration via regenerative agriculture with Garrett Land and Cattle. ',
      applicant: 'Nori',
      rating: '1',
      keywords: 'Garrett Land and Cattle',
      location: { name: 'Iowa, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.88',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://nori.com/supplier/garrett-land-and-cattle',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 50,000 tCO2 removal over a 722.6 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Project estimates net CO2 removal based on four tree classes. The TIST project allows farmers to choose which species of tree to plant on their land. Validation of volume would require documentation of tree species actually established.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 11.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 44 year permanence.',
          comment:
            'Project lifetime appears to be 30 years (2003-2032), with 11 years remaining from date of review.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "Project claims that 70% of net carbon finance profits are directed to the farmers who own the trees, plausibly changing the incentive structure around their land use. TIST Uganda started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of the project's historical carbon credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable details provided on project design.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT075',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Uganda. ',
      applicant: 'Clean Air Action',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Uganda' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.89',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://program.tist.org/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in rangeland soil.',
          comment:
            'Project applies compost to grazed rangelands to increase soil organic carbon. Project seeks support to expands upon a pilot project. Validating project mechanisms would require details that are not available for the pilot plots or the planned expansion.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 2 tCO2 removal. It is unclear if this volume is carbon removal from the pilot project, or if it is attributed to the project expansion. A buffer pool will be maintained to mitigate against reversals according to the ACR methodology.',
          comment:
            'Pilot project design is well described, but no data or conclusions are publicly available. Validation of volume would at a minimum require clear project specifics (volume claimed over a specific area for a specific time period) or clear communication of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Specificity around credited activities, participating lands, and volume estimation methodology is not publicly availabe.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT076',
      description:
        'Enhances rangeland soil health and carbon sequestration with compost. ',
      applicant: '3Degrees ',
      rating: '1',
      keywords: '',
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.90',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://carbonthroughcompost.wordpress.com/home-2/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project partners with small-holder farmers to establish plantations on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 40000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 40,000 tCO2 removal from an unknown project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project parcels are owned by smallholder coffee farmers and planted with a mixture of timber, shade, conservation-oriented, and fruit trees. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project assumes a removal rate of 17.2 tCO2/ha/yr up to a maximum of 258.5 tCO2/ha. However, the uncertainty inherent in the reporting structure of the grouped project makes it difficult to verify the offered volume. This grouped project indicates plans for expansion through 2028, and lists 56 species of trees which farmers may choose from to establish plantations.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 33.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 80 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2014-2054), with 33 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of pre-project land use, i.e. unused degraded land, cropland, and pasture/grassland.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project design detail available for early instances of grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT078',
      description: 'Afforestation and reforestation with coffee farmers. ',
      applicant: 'ClimateCare ',
      rating: '1',
      keywords: '',
      location: { name: 'Columbia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.92',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.purprojet.com/project/coffee-for-peace/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project pursues forest rehabilitation by planting new trees under existing forest canopy, tending to established forests, and performing enrichment planting.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 3100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 3,100,000 tCO2 removal from a 123,000 ha project area. No information is provided regarding measures to mitigate against reversals.',
          comment:
            'See Specificity comment. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Seller claims that there are no fossil fuel emissions associated with project. No public information is available to verify. See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 60.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 60 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment. Project is implemented by a state-owned forestry enterprise and carried out in a region that has been declared of ecological significance by the state.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information is available for this project. Listing in registry cannot be found.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT079',
      description: 'Improved forest management project in Cuiluan.  ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Cuiluan',
      location: { name: 'Heilongjiang Province, China' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.93',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 200000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 200,000 tCO2 removal over a 97,208 acre project. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 94.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2015-2115) with 94 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon as project involves complex financial transactions between The Forestland Group, multiple project developers, and the finance-arm of TNC.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued use of land for timber harvest, recreation, and natural gas extraction.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT080',
      description:
        'Improved forest management at The Forestland Group Highlands through the Cumberland Forest Project.',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Cumberland Forest Project, Forestland Group Highlands',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.7',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/what-we-do/our-priorities/protect-water-and-land/land-and-water-stories/cumberland-forest-project/?vu=cumberland',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 900000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 900,000 tCO2 removal from changes in forest management over 402,349 acres. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 18% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 94.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 120 year permanence.',
          comment:
            'Project must maintain carbon stocks for 100 years following the year of issuance of any carbon credit. We therefore report the permanence for the first credits issued in 2015 (94 years remaining). Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy. Physical risk to this project is high as carbon benifits rely on the sustained growth ponderosa pine, a fire-prone species, in an area with a high fire risk.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is harvest of forest carbon on an aggressive 10 year cycle.',
          comment:
            'The claimed counterfactual seems radical given the typical 30-60 year harvest cycle for ponderosa pine.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT081',
      description:
        'Increasing carbon sequestration by improving timberland management at Klamath East IFM. ',
      applicant: 'Green Diamond',
      rating: '1',
      keywords: 'Klamath East ',
      location: { name: 'Oregon, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.6',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=273',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 75000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 75,000 tCO2 removal from changes in forest management over a 16,908 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 94.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2015-2115) with 94 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon as project involves complex financial transactions between The Forestland Group, multiple project developers, and the finance-arm of TNC.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued use of land for timber harvest, recreation, and natural gas extraction.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT082',
      description:
        'Improved forest management at Lonesome Pine through the Cumberland Forest Project.',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Cumberland Forest Project, Lonesome Pine',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.8',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/what-we-do/our-priorities/protect-water-and-land/land-and-water-stories/cumberland-forest-project/?vu=cumberland',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 112000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 112,000 tCO2 removal from changes in forest management over a 9,753 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 92.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2013-2113) with 92 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon as project involves complex financial transactions between The Forestland Group, multiple project developers, and the finance-arm of TNC.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued use of land for timber harvest, recreation, and natural gas extraction.',
          comment:
            '95% of the project area is placed under permanent conservation easement, making further carbon finance non-additional.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT083',
      description:
        'Improved forest management at Virginia Highlands I through the Cumberland Forest Project.',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Cumberland Forest Project, Virginia Highlands I',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.9',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/what-we-do/our-priorities/protect-water-and-land/land-and-water-stories/cumberland-forest-project/?vu=cumberland',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Avoids biomass emissions by burying wood waste in covered pits.',
          comment:
            'Technology has not been vetted in practice nor explored carefully in the scientific literature. Constuction of pilot pit began in November 2020. From a broad lifecycle perspective, successful deployment would form a carbon removal pathway when coupled to biomass production. From a narrow, project-specific lifecycle perspective, project would only avoid biogenic CO2 emissions.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 53308.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 53,308 tCO2 removal from the future storage of timber slash.',
          comment:
            'Total volume could be plausible given project claim of access to 100,000 t slash / year. Validation of volume additionally depends on validation of pit design, for which specifics are not available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes:
            'Project reports 1215 tCO2 emitted from diesel-burning equipment. Project mentions that excess gas emission from pit leakage will be flared at the surface and included in the LCA.',
          comment:
            'Relatively few details provided. Serious analysis required around the potential for emissions to leak from pit.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: '',
          comment:
            'Pits are partially above-ground. Risks of emission leakage or anaerobic decomposition not addressed comprehensively.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No commercial value to storing wood waste in pits. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Only publication on technique is a speculative research proposal. Demonstration projects in early phases.',
        },
      ],
      tags: ['biomass', 'burial'],
      id: 'MSFT084',
      description: 'Lufkin NE WHS Timber Residue Collection and Burial',
      applicant: 'Carbon Sequestration',
      rating: '1',
      keywords: '',
      location: { name: 'Texas, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.94',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.carbonsequestration-inc.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6856.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 6,856 tCO2 removal over a 5750 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 20% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 81.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2002-2102) with 81 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual specified. See Specificity comment.',
          comment:
            'TNC acquired the forest management easment to this property in 2002, but did not register to recieve carbon financing until 2010. Carbon financing purportedly provides the option to sell carbon instead of timber. Carbon revenue appears to greatly surpass the value of timber (based on NPV), so it is unclear if purchasing from this project is actual carbon removal, or a donation to future conservation efforts.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Key project documentation in CAR registry has broken links. Reasonable project information still publicly accessible.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT085',
      description:
        'Protecting forest carbon stock at Rich Mountain through the Clinch Valley Conservation program. ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Clinch Valley Conservation, Rich Mountain',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.11',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/about-us/where-we-work/united-states/virginia/stories-in-virginia/clinch-valley-conservation-forestry/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 140267.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 140,267 tCO2 removal over a 11,090 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19.24% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 83.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears over 100 years (2004-2104), with 83 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is dramatic harvest over the first 10 years of the project, followed by growth and another harvest to legal and economic limits in 2065.',
          comment:
            'TNC acquired the forest management easment to this property in 2004, but did not register to recieve carbon financing until 2012. Carbon financing purportedly provides the option to sell carbon instead of timber. Carbon revenue appears to greatly surpass the value of timber (based on NPV), so it is unclear if purchasing from this project is actual carbon removal, or a donation to future conservation efforts.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT086',
      description:
        'Protecting forest carbon stock at Tazewell Elk Garden through the Clinch Valley Conservation program. ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Clinch Valley Conservation, Tazewell Elk Garden',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.12',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/about-us/where-we-work/united-states/virginia/stories-in-virginia/clinch-valley-conservation-forestry/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in rangeland soil, and avoids emissions through modified agricultural practices.',
          comment:
            'Broker provides an incentive for farmers to adopt agricultural practices that increase carbon sequestration in soils. Multiple established soil carbon removal pathways exist, but validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6225000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 6,225,000 tCO2 removal over an unspecified project area. A buffer pool will be maintained to mitigate against reversals according to the ACR or Verra methodology.',
          comment:
            'Validation of volume would at a minimum require information on specific projects, and values are only plausible under a significant scale of participation, for example, 6M ha of farmland at a rate of 1 tCO2 / ha / yr.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Seller claims that offset issued under Climate Action Reserve or Verra protocols require 100-year commitments, but the protocols mentioned do not require projects to make legally-binding contracts for 100 years. Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. No information is provided as to the contract terms with participating farmers.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT087',
      description:
        'Soil organic carbon storage from adoption of carbon farming practices.',
      applicant: 'Indigo Ag',
      rating: '1',
      keywords: '',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.95',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.indigoag.com/for-growers/indigo-carbon',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations.',
          comment:
            'Project establishes mixed-species timber plantations in partnership with small-scale farmers.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 50,000 tCO2 removal from plantations established over 586.23 ha in Honduras. The offered volume is just a portion of the total carbon benefits attributed to the project. Project maintains 20% buffer to mitigate against reversals.',
          comment:
            'Project features 14 timber species and four plantation models. There is not enought information about project implementation to verify volume. See specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 41.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 50 years (2012-2062), with 41 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued use for pasture, annual crops, or cocao farms without tree cover.',
          comment:
            'Project documentation indicates that plantations were established from 2012-2018, and that timber harvest would become profitable sometime between 2020 and 2025. The project did not register to recieve carbon credits until 2019. More information would be necessary to understand the impact of the carbon finance on continued plantation growth.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Very little public information available. Project indicates plans for expansion in project documentation, but does not provide details.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT088',
      description:
        'Community reforestation and agroforestry through the Aprosacao Reforestation Project.',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Aprosacao Reforestation Project, PUR Projet',
      location: { name: 'Honduras' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.96',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.purprojet.com/project/aprosacao/, https://registry.goldstandard.org/projects/details/1808',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 250000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 250,000 tCO2 removal from changes in forest management over a 81,408 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes ~19% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 94.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2015-2115) with 94 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon as project involves complex financial transactions between The Forestland Group, multiple project developers, and the finance-arm of TNC.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is continued use of land for timber harvest, recreation and natural gas extraction.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT089',
      description:
        'Improved forest management at Molpus Ataya through the Cumberland Forest Project.',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Cumberland Forest Project, Molpus Ataya',
      location: { name: 'Tennessee & KY, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.10',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://thereserve2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=1215',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 77248.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 77,248 tCO2 removal over a 4001 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19.24% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 82.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2003-2103), with 82 years remaining. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is dramatic harvest over the first 10 years of the project, followed by growth and another harvest to legal and economic limits in 2072.',
          comment:
            'TNC acquired the forest management easment to this property in 2003, but did not register to recieve carbon financing until 2015. Carbon financing purportedly provides the option to sell carbon instead of timber. Carbon revenue appears to greatly surpass the value of timber (based on NPV), so it is unclear if purchasing from this project is actual carbon removal, or a donation to future conservation efforts.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT090',
      description:
        'Protecting forest carbon stock at Clifton Farm through the Clinch Valley Conservation program. ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Clinch Valley, Clifton Farm',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.13',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://thereserve2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=1160',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project partners with small-holder farmers to establish plantations on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 480000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 480,000 tCO2 removal from two projects in Peru. The offered volume is just a portion of the total carbon benefits attributed to the projects. Each project maintains a 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'This is a combined offer from two distinct projects in Peru. One is a standalone project, and the other is a grouped project with plans for 20x expansion from 2016-2026. Seller does not attribute carbon benefits offered to one project or the other. The inherent uncertainty in the reporting structure of the grouped project makes it difficult to verify the offered volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 27.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 90% chance of 80 year permanence.',
          comment:
            'Project lifetimes appear to be 40 years (2008-2048) and 60 years (2010-2070), respectively. For consistency with other projects, we report 27 years, the minimum of the years remaining in each project lifetime.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of pre-project land use, i.e. unused degraded land, cropland, and pasture/grassland.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design for both project. Current information for grouped project is lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT092',
      description:
        "Agroforestry and reforestation with small-scale farmers though PUR Projet's Jubilacion Segura project. ",
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'PUR Projet, Jubilacion Segura',
      location: { name: 'Peru' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.98',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.purprojet.com/project/jubilacion-segura/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in rangeland soil.',
          comment:
            'Broker provides an incentive for to adopt agricultural practices that increase carbon sequestration in soils. Project activities are not prescribed by the program. Validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100 tCO2 removal from an unknown project area. A 10% buffer pool will be maintained to mitigate against reversals.',
          comment:
            'Volume is calculated using the COMET-Farm model, however input parameters are not available. Validation of volume would at a minimum require clear project specifics.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion. Significant co-benefits to land managers claimed alongside climate benefits offered for sale.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT094',
      description:
        'Generating soil carbon with farmer-centric incentives for verifiable outcomes.',
      applicant: 'Cargill ',
      rating: '1',
      keywords: '',
      location: { name: 'Iowa, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.100',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.theoutcomesfund.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from atmosphere for sequestration in agricultural soil and forests. Avoids emissions through modified agricultural practices and reduced forest loss.',
          comment:
            'Project pursues a suite of interventions to reduce agricultural emissions and increase soil organic carbon. In addition, project supports land use planning and the creation of conservation areas to reduce forest loss.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 330000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 330,000 tCO2 removal from an unknown project area. The offered volume is just a portion of the total carbon benefits attributed to the project. An 11% buffer pool is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. The removal attributed to an increase in soil organic carbon is estimated using the Rothamsted Soil Carbon Model. No soil sampling is performed to train or validate this model.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project activities started in 2012. The carbon benefits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 9 years ago.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project design detail available for early instances of grouped project.',
        },
      ],
      tags: ['soil', 'forests'],
      id: 'MSFT096',
      description:
        'Promoting sustainable agriculture and forest conservation through the COMACO Landscape Management Project. ',
      applicant: 'EDF Trading ',
      rating: '1',
      keywords: 'COMACO Landscape Management Project',
      location: { name: 'Zambia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.102',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.itswild.org' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in re-established woodlands.',
          comment: 'Project establishes native woodlands.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 16038.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 16,028 tCO2 removal from an unknown project area. Project does not specify a mechanism to mitigate against reversals.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'See Specificity comment. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'No documentation available for this project on registry.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT097',
      description:
        "Supports the UK's national tree planting ambitions at Tom's Wood. ",
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: "Tom's Wood",
      location: { name: 'England ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.103',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 150000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 150,000 tCO2 removal from a project area of 5280 ha. This is a combined offering from two sub-projects in Kenya. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'This is a combined offer from two distinct grouped projects in Kenya, both under the TIST umbrella. Seller does not attribute carbon benefits offered to one project or the other. Projects estimate net CO2 removal based on four tree classes, and allow farmers to choose which species to plant on their land. The uncertainty inherent in the reporting structure of the grouped project makes it difficult to verify the offered volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 12.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 45 year permanence.',
          comment:
            'Both sub-project lifetimes appear to be 30 years (2004-2033), with 12 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project activities started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of carbon credits from that period of time.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design and early instances of this grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT098',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Kenya. ',
      applicant: 'Clean Air Action',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Kenya' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.104',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://program.tist.org/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 590000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 590,000 tCO2 removal from changes in forest management over a 185,000 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 18% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 93.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 120 years permanence.',
          comment:
            'Project must maintain carbon stocks for 100 years following the year of issuance of any carbon credit. We therefore report the permanence for the first credits issued in 2014 (93 years remaining). Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy. Physical risk to this project is high as carbon benifits rely on the sustained growth ponderosa pine, a fire-prone species, in an area with a high fire risk.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is harvest of forest carbon on an aggressive 10 year cycle.',
          comment:
            'The claimed counterfactual (10 year harvest cycle) seems radical given the typical 30-60 year harvest cycle for ponderosa pine.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT099',
      description:
        'Increasing carbon sequestration by improving timberland management at Klamath West IFM. ',
      applicant: 'Green Diamond',
      rating: '1',
      keywords: 'Klamath West ',
      location: { name: 'Oregon, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.5',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=274',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests.',
          comment:
            'Project plants a mix of native species on former pasture lands owned by the provencial government.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10925.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,925 tCO2 removal from a 56 ha project area. A 10% buffer pool will be maintained to mitigate against reversals.',
          comment:
            'Offer claims removal rate of 5.42 tCO2/ha/yr, but does not specify species to be planted. See specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Seller indicates that project land is owned by the provincial government, and is subject to laws prohibiting the harvest or sale of trees.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key project details.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT100',
      description: 'Reforestation of degraded lands in northern Spain.',
      applicant: 'Land Life Company',
      rating: '1',
      keywords: '',
      location: { name: 'Spain ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.105',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://landlifecompany.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 128978.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 128,978 tCO2 removal over a 5747.19 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 19.24% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Not enough information available to verfiy removal volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 81.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2002-2102), with 81 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is dramatic harvest over the first 10 years of the project, followed by growth and another harvest to legal and economic limits in 2074.',
          comment:
            'TNC acquired the forest management easment to this property in 2002, but did not register to recieve carbon financing until 2015. Carbon financing purportedly provides the option to sell carbon instead of timber. Carbon revenue appears to greatly surpass the value of timber (based on NPV), so it is unclear if purchasing from this project is actual carbon removal, or a donation to future conservation efforts.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT101',
      description:
        'Protecting forest carbon stock at Rich Mountain through the Clinch Valley Conservation program. ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Clinch Valley Conservation, Rich Mountain',
      location: { name: 'Virginia, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.14',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://thereserve2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=1159',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project pays landowners to adopt specified forest management practices.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1400000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,400,000 tCO2 removal from the future enrollment of landowners in forest management program. Program aims to enroll 500,000 acres in the next 5-7 years. A buffer pool will be maintained to mitigate against reversals following the VCS methodology.',
          comment:
            'Program pays participating landowners not for a specific quantity of carbon removed from their individual lands, but for completing forest management practices the program claims will increase forest carbon across the landscape of participating forest owners. Public information about the landscape-level estimation of carbon benefits would be necessary to verify volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to promise the removal slice of the project as a unique and verifiable product that will only be sold once.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Program appears to contract with landowners for a 10 or 20 year time period. Seller reports permanence at the program level, not the property level. Program pursues a number of strategies to increase likelihood of program-level permanence despite the short contracts with landowners, including daisy-chained landowner contracts and recruitment of new landowners to replace lost carbon benefits. We report the minimum landowner contract term as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Program plans to enroll approximately 7,000 landowners. It does not appear that the baseline practices or management plans of participating landowners will be reported, making it hard to verify the impact of carbon finance on their management practices.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available via the Microsoft 2021 Carbon Removal RFP and project website. Key program details, including landscape-level assumptions about carbon removal, are not publicly available.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT102',
      description:
        'Improving management of family-owned forests through the Family Forest Carbon Program. ',
      applicant: 'The Nature Conservancy',
      rating: '2',
      keywords: 'Family Forest Carbon Program',
      location: { name: 'Pennsylvania, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.106',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.familyforestcarbon.org/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes oak and magnolia forests on previously barren land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 418299.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller claims 418,299 tCO2 removal over a 28,391.8 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 22% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer only carbon benefits generated available in MSFT FY21. Project claims a plausable removal rate of 1.88 tCO2/ha/yr for the first seven years of opperation (2014-2021). Assumptions leading to this removal rate are well documented and cited.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 53.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 60 years (2014-2074), with 53 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy, though this risk may be moderated by the proponent being a stack backed entity.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified as land remaining barren or conversion to agricultural use.',
          comment:
            "Planting activity was carried out from 2014-2020, and project registered to recieve carbon credits in 2019. Project occurs in a region highly relevant to the Chinese government's reforestation goals and ongoing programs (e.g. Green for Grain). More information about why this project in ineligible for state-available funding would be needed to be confident about the additionality of this project.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT103',
      description: 'Afforestation project located in Henan Nanzhao.',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Henan Nanzhao',
      location: { name: 'Henan, China ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.2',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1930',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.',
          comment:
            'Project specifically proposes to incorporate olivine into data center constructio. Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100 tCO2 removal from the replacement of conventional gravel and sand with olivine in Microsoft data center construction.',
          comment: 'Few details available on specific deployment plan.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Boundary conditions for future, location-specific LCAs are well-specified. Not enough information is available to estimate or calculate the negativity.',
          removal: 'NA',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            "Counterfactual is using alternative sand and gravel materials that don't provide carbon removal benefits.",
          comment:
            'Olivine can be purchased and used separate from its carbon removal benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is reasonably well-described in the published literature.',
        },
      ],
      tags: ['mineralization', 'sand&gravel'],
      id: 'MSFT104',
      description: 'CO2 removal with olivine at Microsoft data centers. ',
      applicant: 'GreenSand ',
      rating: '2',
      keywords: '',
      location: { name: 'Global ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.107',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.google.com/url?q=https://www.greensand.nl/&sa=D&source=editors&ust=1613078849664000&usg=AFQjCNGT98zDitY4gaIJaX_Ef-VHYG2-iw',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2750000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 2,750,000 tCO2 removal from a program that aims to expand from 125,000 acres to 1,000,000 acres in the next 9 years. The offered volume is a portion of the total carbon benefits attributed to the project.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Program enrolls landowners who own a minimum of 2000 forested acres. More information about eligibility criteria and baseline practices of participating landowners would be useful to verify the impact of carbon finance on their management plans.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Seller claims that project is listed in the ACR registry, but does not provide a formal ID.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT105',
      description: 'Scaling the Working Woodlands Program across the US. ',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Working Woodlands Program',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.108',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.nature.org/workingwoodlands' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests.',
          comment:
            'Project establishes bamboo plantations on degraded agricultural land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1800500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,800,500 tCO2 removal from a project that is projected to expand from 600 ha in 2021 to 5,500 ha in 2031. A buffer pool will be used to mitigate against reversals using the VCS methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 20.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 20 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available only via the Microsoft 2021 Carbon Removal RFP. Key project details are not publicly available, including bamboo species, growth rate assumptions, and specific project location.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT106',
      description:
        'Establishing the Bamb\u00fa Tierra Nueva bamboo plantation. ',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Bamb\u00fa Tierra Nueva',
      location: { name: 'Mexico' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.109',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Project removes carbon from atmosphere for storage in coastal ecosystems, and avoids emissions that would result from their degradation.',
          comment:
            'Project seeks to develop pilot projects to protect and restore mangroves, salt marshes, and seagrass ecosystems. These pilot projects would lay the groundwork for a "blue carbon project pipeline." Validating project mechanisms would require specific project details which are not available.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 600000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 600,000 tCO2 removal from project pilots that are in development.',
          comment:
            'Validation of volume would at a minimum require information on specific projects. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            "No information regarding the project's planned contractual commitments is available.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information on specific projects to evaluate additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Verry little public information is available for the proposed pilot projects.  Seller claims the first pilot project will be registered with Verra by 2022.',
        },
      ],
      tags: ['ocean', 'land use conversion'],
      id: 'MSFT107',
      description:
        'Restoring coastal wetlands for climate mitigation, adaptation and resilience by building the Blue Carbon Resilient Credit Project Pipeline.',
      applicant: 'The Nature Conservancy',
      rating: '1',
      keywords: 'Blue Carbon Resilient Credit Project Pipeline',
      location: { name: 'USA, Belize, Carribean ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.110',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.nature.org/en-us/what-we-do/our-insights/perspectives/investing-in-blue-carbon-for-a-resilient-future/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests.',
          comment:
            'Project establishes bamboo plantations on degraded agricultural land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,000,00 tCO2 removal from a project that is projected to expand to 50,000 ha by 2030. A buffer pool will be used to mitigate against reversals using the VCS methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 30.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 30 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available only via the Microsoft 2021 Carbon Removal RFP. Key project details are not publicly available, including planting plans, bamboo growth rate assumptions, and specific project location.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT108',
      description: 'Establishing Giant Bamboo plantations in the Philippines. ',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: '',
      location: { name: 'Mindanao, Philippines        ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.111',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a waste stream. From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 9783258.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 9,783,258 tCO2 removal, and specifies that ~230k tCO2 removal will be generated in FY21.',
          comment:
            "Seller claims 300 licensed concrete plants using CarbonCure's technology, with an estimated capacity of 80,000 tCO2 avoided emissions annually. We infer that these volume numbers CO2 utilization with avoided emissions from reducing conventional concrete production. It is unclear what timeline and scaling assumptions the offered volume reflects.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.93,
          units: '',
          rating: 1.0,
          notes:
            'Project claims 0.063 tCO2 emissions for every 0.9 tCO2 mineralized.',
          comment:
            'For consistency, we recompute negativity only for the carbon mineralization component. LCA boundary conditions are well-specified, and several third-party audits of the LCA analysis have been performed. Note, however, that this is a higher ratio than previously reported.',
          removal: 0.9,
          emissions: 0.063,
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage, even after the manufactured building material is de-comissioned.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Cement will already be purchased and used separate from its carbon removal benefits. Carbon removal benefits may be used in marketing by the concrete provider.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Publications on specific techology are not yet available, but references to several third-party LCAs are provided and may be available upon request.',
        },
      ],
      tags: ['mineralization', 'concrete'],
      id: 'MSFT109',
      description: 'Carbon reductions in concrete. ',
      applicant: 'CarbonCure ',
      rating: '3',
      keywords: '',
      location: { name: 'North America' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.112',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.carboncure.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 184.6,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 200 tCO2 removal. A 2.5% buffer is maintained to mitigate against reversals.',
          comment:
            'Accounting for the 2.5% buffer, the offer of 200 tCO2 corresponds to 205.12 tCO2 embodied in biochar at the point of production. For consistency with other biochar projects, volume at production is decreased by 10% (to 184.6 tCO2) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion. Project produces biochar that is 92% C by mass. In other words, 3.4 kg CO2 emissions are avoided / kg of biochar produced. Thus, this offer corresponds to the production of about 60 t of biochar. The claimed annual production capacity of this plant is 700 t.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.944,
          units: '',
          rating: 1.0,
          notes:
            'Project reports  0.17 tCO2 emitted for 3.4 tCO2 stored at the point of biochar production. For consistency with other biochar projects, CO2 sequestration at production is decreased by 10% (to 3.06 tCO2/t biochar) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced. Includes fossil emissions for feedstock harvest, transporation, and pyrolosis.',
          removal: 3.06,
          emissions: 0.17,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 896.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 5000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. Using the reported O:C ratio of 0.021 and a simple published model, we estimate that 90% of the biochar C will remain in 896 years. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock is residual wood (thinnings). Biochar production is coupled with discrict heating. Further analysis would require understanding the impact of carbon finance on the operation of the facility.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project specifics, public documentation on chemical composition and LCA is available, with third-party analysis as required by the Puro platform on which project is listed.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT110',
      description: 'Demonstration and commercialisation of biochar.',
      applicant: 'Carbofex',
      rating: '4',
      keywords: '',
      location: { name: 'Finland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.113',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://puro.earth/services/biochar-finland-100008',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.',
          comment:
            'Project specifically proposed to spread olivine near railroad tracks. Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10326.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,326 tCO2 removal from the replacement of conventional sand with olivine along railroad tracks.',
          comment: 'Few details available on specific deployment plan.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Boundary conditions for future, location-specific LCAs are well-specified. Not enough information is available to estimate or calculate the negativity.',
          removal: 'NA',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            "Counterfactual is using alternative sand materials that don't provide carbon removal benefits.",
          comment:
            'Olivine can be purchased and used separate from its carbon removal benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is reasonably well-described in the published literature. Pilot project details (including locations and durations) are publicly available.',
        },
      ],
      tags: ['mineralization', 'sand'],
      id: 'MSFT111',
      description: 'CO2 removal with olivine near railway tracks. ',
      applicant: 'GreenSand',
      rating: '2',
      keywords: '',
      location: { name: 'Amsterdam, Netherlands' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.114',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.greensand.nl/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in agroforestry systems.',
          comment:
            'Project plants trees in coffee or vanilla agricultural systems. Proejct also pursues farmer education and activities to decrease pressure on forests.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 50,00 tCO2 removal from an unknown project area. The offered volume is a portion of the total carbon benefits likely to be attributed to the project. A buffer pool will be maintained to mitigate against reversals following the VCS of Gold Standard methodology.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 80.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 80 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is agricultural systems without trees.',
          comment:
            'Project claims to enhance agricultural yields though agroforestry practices. More information is needed to understand the impact of carbon finance on the transition to agroforestry. Project activities started in 2015, six years before planned registration as a carbon removal project in 2021.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available only via the Microsoft 2021 Carbon Removal RFP. Key project details are not publicly available, including planting schemas, species used, and specific project location.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT112',
      description:
        'Restoring coffee and vanilla ecosystems through a PUR Projet agroforestry program in Uganda. ',
      applicant: 'ClimateCare Oxford ',
      rating: '1',
      keywords: 'PUR Projet',
      location: { name: 'Uganda' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.115',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.purprojet.com/project/rwenzori-project-uganda/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in wooden building elements.',
          comment:
            'Project produces pre-fabricated, insultated wooden wall elements. From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 500 tCO2 removal. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims 49.5 kg CO2 is embodied in each square meter of building material produced. Documentation on the Puro platform claims 29 kg CO2 per square meter of building material produced. The discrepancy appears to lie in the project boundary considered. 500 tCO2 is a plausible volume given the technology described, but more documentation connecting offered volume to crediting methodology would be needed verify this volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'An LCA analysis was performed by a third-party, as required by Puro, and is reflected in the net credits offered via the Puro platform. LCA data and analysis are not publicly available, and there is not enough information to calcualte negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests. 50 years is plausible based on existing literature and regulation.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project produces high-value building materials, and may not be contingent on carbon incentives. This offer might be better understood as an investment in [TK].',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project. Some public documentation is available on the Puro Platform.',
        },
      ],
      tags: ['biomass', 'materials'],
      id: 'MSFT113',
      description: 'Production of innovative timber wall elements.',
      applicant: 'Termowood ',
      rating: '2',
      keywords: '',
      location: { name: 'Norway' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.116',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://puro.earth/services/innovative-timber-construction-elements-norway-100012',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions from park and garden waste. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 67.5,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 75 tCO2 removal from a pilot plant in Stockholm.',
          comment:
            'Seller claims that 2 kg CO2 emissions are avoided / kg of biochar produced. In other words, the biochar produced is 55% C by mass. For consistency with other biochar projects, volume at production is decreased by 10% (to 67.5 tCO2) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion. The offer thus corresponds to the production of 37.5 t of biochar. Seller claims pilot plant has the capacity to produce 300 t biochar per year.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Seller claims that emissions from biochar production and transportation are subtracted from the gross quantity of CO2 embodied in biochar before carbon benefits are offered to be sold. A detailed LCA is not publicly available.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. In this case, the O:C ratio is not available.  [TK: years].',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock is plant waste from city residents. Biochar production is coupled with discrict heating. Further analysis would require understanding the impact of carbon finance on the operation of the facility.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few details provided on project specifics. Public documentation on chemical composition and LCA are not available.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT114',
      description: 'Producing biochar from park and garden waste. ',
      applicant: 'Stockholm Exergi',
      rating: '3',
      keywords: '',
      location: { name: 'Sweden' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.117',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.stockholmexergi.se/om-stockholm-exergi/about-stockholm-exergi/negative-emissions/biochar/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in laminated wood building materials. May also avoid emissions that would come from producing other materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 15000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 15,000 tCO2 removal. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Volume sourced from multiple facilities across Finland to produce laminated lumber from kiln-dried pine and spruce. Seller claims an annual production capacity of 40,000 tCO2. Species and composition of wood and wood products are well-characterized. Volume appears plausible assuming the given procurement.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.776,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.16 tCO2 emissions for 0.71 tCO2 stored. Boundary conditions include raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced.',
          removal: 0.71,
          emissions: 0.159,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Wood carbon stored in building materials is more durable than in forests. 50 years is plausible based on existing literature and regulation.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project produces high-value building materials, and may not be contingent on carbon incentives. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            "Few project details provided in this specific offer, but underlying project information available from Puro Platform and Stripe's 2020 Negative Emisions Purchase.",
        },
      ],
      tags: ['biomass', 'materials'],
      id: 'MSFT115',
      description: 'Manufacturing wooden building elements. ',
      applicant: 'Finnish Log House',
      rating: '4',
      keywords: '',
      location: { name: 'Finland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.118',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://puro.earth/services/building-elements-finland-100010',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in peatlands.',
          comment:
            'Project restores peatlands by blocking artificial drainage.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 210274.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 210,274 tCO2 removal from the restoration of 2100 ha of peatland.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. See Specificity comment.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Not enough information to assess additionality. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available only via the Microsoft 2021 Carbon Removal RFP.',
        },
      ],
      tags: ['soil', 'conversion'],
      id: 'MSFT116',
      description:
        'Restoring bog and peatlands though the Dunbeath Peatland Restoration project. ',
      applicant: 'ClimateCare Oxford ',
      rating: '1',
      keywords: 'Dunbeath Peatland Restoration',
      location: { name: 'Scotland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.119',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere for sequestration in soil and trees.',
          comment:
            'Project partners with farmers to implement a range of activities, including time-controlled grazing, tree planting and cover cropping. Multiple established carbon removal pathways exist, but validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 360000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 360,000 tCO2 removal from an unknown project area. A buffer pool will maintained to mitigate against reversals; methodology is not specified.',
          comment:
            'Seller claims a minimum removal rate of 5000 tCO2/ha through some combination of soil organic carbon improvement and tree growth. Validation of volume would at a minimum require information on specific projects.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available.',
        },
      ],
      tags: ['soil'],
      id: 'MSFT117',
      description:
        'PUR Projet coordinating regenerative agriculture and rotational grazing in Australia. ',
      applicant: 'ClimateCare Oxford ',
      rating: '1',
      keywords: 'PUR Projet',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.120',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.purprojet.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Project removes carbon for storage in mangrove forests.',
          comment:
            'Project plans to pursue establish a new mangrove ecosystem alongside social and economic interventions to decrease deforestation pressure. Validating project mechanisms would require specific project details which are not available.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 413500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 413,500 tCO2 removal from the development of an integrated mangrove & aquaculture system of unspecified size.',
          comment:
            'Validation of volume would at a minimum require information on project specifics. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 20.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 20 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information on specific projects to evaluate additionality. Project claims significant co-benefits alongside carbon benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Verry little public information is available, including specific project activites, specific location, and specific project area. Seller claims the project will be registered with Verra.',
        },
      ],
      tags: ['forests'],
      id: 'MSFT118',
      description: 'Mangrove afforestation in India. ',
      applicant: 'ClimateCare Oxford ',
      rating: '1',
      keywords: '',
      location: { name: 'India' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.121',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://vnvadvisory.com/upcoming-projects/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in laminated wood joists. May also avoid emissions that would come from producing other materials.',
          comment:
            'Project produces pre-cut, laminated timber beams. From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 14000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 14,000 tCO2 removal. An 11% buffer is maintained to mitigate against reversals.',
          comment:
            'Volume sourced from multiple facilities across Norway producing laminated spruce joists. Seller claims 0.616 tCO2 / cubic meter laminated timber produced. Offer thus corresponds to the production of about 25,526 cubic meters of laminated timber.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'An LCA analysis was performed by a third-party, as required by Puro, and is reflected in the net credits offered via the Puro platform. LCA data and analysis are not publicly available, and there is not enough information to calcualte negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests. 50 years is plausible based on existing literature and regulation.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project produces high-value building materials, and may not be contingent on carbon incentives. This offer might be better understood as an investment in [TK].',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project. Some public documentation is available on the Puro Platform.',
        },
      ],
      tags: ['biomass', 'materials'],
      id: 'MSFT119',
      description: 'Production of wooden building elements in Norway.',
      applicant: 'Moelven Limtre ',
      rating: '3',
      keywords: '',
      location: { name: 'Norway' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.122',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://puro.earth/services/moelven-leading-scandinavian-timber-producer-100023',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions from wood harvest residue. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 738.5,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 800 tCO2 removal. A 2.5-5% buffer is maintained to mitigate against reversals.',
          comment:
            'Accounting for the 2.5% buffer, the offer of 800 tCO2 corresponds to 820.5 tCO2 embodied in biochar at the point of production. For consistency with other biochar projects, volume at production is decreased by 10% (to 738.5 tCO2) to reflect volume of "permanently" sequestered CO2. See Permanence for further discussion. Seller claims 2.8 kg CO2 emissions are avoided / kg of biochar produced. Thus, this offer corresponds to the production of 293 t of biochar.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Analysis performed by third-party, as required by Puro. Boundary conditions well-specified and include emissions for feedstock harvest, transporation, and pyrolosis. However, details of the LCA are not available, and negativity cannot be calculated.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 1000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. Using the reported O:C ratio of 0.017 and a simple published model, we estimate that 90% of the biochar C will remain in [TK] years. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock is residual wood (untreated wood chips). Further analysis would require understanding the impact of carbon finance on the operation of the facility.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project specifics, and public documentation on chemical composition of biochar is available. LCA details are not publicly available.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT120',
      description: 'Production of certified biochar in Germany.',
      applicant: 'Carbon Cycle ',
      rating: '3',
      keywords: '',
      location: { name: 'Germany' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.123',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://puro.earth/services/carbon-cycle-germany-premium-quality-biochar-100018',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in laminated wood joists. May also avoid emissions that would come from producing other materials.',
          comment:
            'Project produces pre fabricated timber elements. From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 13000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 13,000 tCO2 removal. An 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Volume sourced from multiple facilities across Norway. Seller claims 0.66 tCO2 / cubic meter of wooden building element produced. This offer thus corresponds to the production of about 19,696 cubic meters of wooden building element.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'An detailed, third party LCA was performed. Report is in Norweigan. Negativity could likely be calculated upon translation.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests. 50 years is plausible based on existing literature and regulation.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project produces high-value building materials, and may not be contingent on carbon incentives. This offer might be better understood as an investment in [TK].',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project specifics, including feedstock and LCA, are not publicly available. Project does not yet appear on the Puro platform.',
        },
      ],
      tags: ['biomass', 'materials'],
      id: 'MSFT122',
      description: 'Production of wooden building elements in Norway.',
      applicant: 'Are Treindustrier',
      rating: '3',
      keywords: '',
      location: { name: 'Norway' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.125',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.jatak.no/bedriftene/are-brug-as-avd-askim',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. More broadly, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 28.7,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 31 tCO2 removal from a demonstration project. A 2.5% buffer is maintained to mitigate against reversals.',
          comment:
            'Accounting for the 2.5% buffer, the offer of 31 tCO2 corresponds to 31.8 tCO2 embodied in biochar at the point of production. For consistency with other biochar projects, volume at production is decreased by 10% (to 28.7 tCO2) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion. Project produces biochar that is 85-95% C by mass. Conservatively, 3.12 kg CO2 emissions are avoided / kg of biochar produced. Thus, this offer corresponds to the production of about 10.2 t of biochar.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.961,
          units: '',
          rating: 1.0,
          notes:
            'Project reports 0.035 tCO2 emitted for 1 tCO2 stored at the point of biochar production. For consistency with other biochar projects, CO2 sequestration at production is decreased by 10% to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion.',
          comment:
            'Analysis performed by third-party, as required by Puro. Boundary conditions well-specified and include emissions for feedstock harvest, transporation, and pyrolosis.',
          removal: 0.9,
          emissions: 0.035,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 1000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. Project reports an O:C ratio range of 0.3-0.8. Using a conservative O:C ratio of 0.08 and a simple published model, we estimate that 90% of the biochar C will remain in [TK] years. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock is food production residue material (e.g. walnut shells). Further analysis would require understanding the impact of carbon finance on the operation of the facility, and competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details are provided on project specifics. Additional documentaiton on LCA and other certification may be available upon request.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT123',
      description: 'Converting biowaste into biochar. ',
      applicant: 'Carbo Culture ',
      rating: '4',
      keywords: '',
      location: { name: 'California, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.126',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'carboculture.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project invests in improved methods and technologies to measuring the carbon impacts of a suite of farming practices. Multiple established carbon removal pathways exist, but validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1036.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,036 tCO2 removal from an unknown project area.',
          comment:
            'In-field samples are taken annually to measure soil organic carbon. Project is partnering with the Finnish Meteorological Institute to develop the monitoring, reporting and verification standard. Validation of volume would at a minimum require clear project specifics, or clear documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10 year permanence.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project lacks enough project detail to evaluate additionality. See Specificity comment for further discussion.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'No information or data on specific projects are publicly available.',
        },
      ],
      tags: ['soil', 'farms'],
      id: 'MSFT126',
      description:
        'Removal of atmospheric carbon dioxide through agricultural soil carbon sequestration at the Qvidja Carbon Farm.',
      applicant: 'Compensate Foundation',
      rating: '1',
      keywords: 'Qvidja Carbon Farm',
      location: { name: 'Finland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.129',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.qvidja.fi' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. More broadly, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 461.5,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 500 tCO2 removal from a demonstration system. A 2.5% buffer is maintained to mitigate against reversals.',
          comment:
            'Accounting for the 2.5% buffer, the offer of 500 tCO2 corresponds to 512.82 tCO2 embodied in biochar at the point of production. For consistency with other biochar projects, volume at production is decreased by 10% (to 461.5 tCO2) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion. Project claims to produce biochar that is >80% C by mass, and the Puro platform credits this project with 2.88 kg CO2 / kg of biochar produced. Thus, this offer corresponds to the production of about 178 t of biochar.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Analysis performed by third-party, as required by Puro. Boundary conditions well-specified and include emissions for feedstock harvest, transporation, and pyrolosis. However, details of the LCA are not available, and negativity cannot be calculated.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 1000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. In this case, the O:C ratio is not available.  [TK: years].',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock for this facility is low-value waste wood from construction. Biochar production is coupled with providing greenhouse heat. Further analysis would require understanding the impact of carbon finance on the operation of the facility.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few details provided on project specifics. Public documentation on chemical composition and LCA are not available.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT127',
      description:
        'Diverting green waste from landfill and converting to bio energy and biochar through the ECHO2 project. ',
      applicant: 'Rainbow Bee Eater ',
      rating: '3',
      keywords: 'ECHO2',
      location: { name: 'Australia ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.130',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://puro.earth/services/biochar-australia-100014',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from combined heat and power plant, and instead captures it for geologic sequestration.',
          comment:
            'Project seeks to add carbon capture and storage to an existing biomass combined heat and power plant. Carbon will be captured from exhaust, condensed, compressed, shipped to the North Sea, and injected into bedrock. From a narrow lifecycle perspective, project only avoids CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 800000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 800,000 tCO2 removal from the addition of operations of CCS at an existing combined heat and power plant from 2024 onward.',
          comment:
            'Seller claims the project will be able to remove up to 0.8M t/yr using the hot potassium carbonate process and acheiving 90% CO2 capture. This seems feasible based on the technology. The offer is equivalent to about a year of project operation.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating BECCS projects. Seller claims offer reflects LCA emissions deductions, and includes emissions from the carbon capture process, liquefaction, transport, and the perparation and management of permanent storage. No public LCA details are available, and there is not enough information to calculate negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is operation of biomass combined heat and power plant without carbon capture and storage (CCS).',
          comment:
            'This project is likely additional, but specifics depend on the economics of any applicable tax credits or policy incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project details available. LCA and storage details are lacking.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT128',
      description: 'BECCS from existing bio-CHP running on forest residues.',
      applicant: 'Stockholm Exergi ',
      rating: '3',
      keywords: '',
      location: { name: 'Sweden' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.131',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1846.2,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 2000 tCO2 removal from an established facility. A 2.5% buffer is maintained to mitigate against reversals.',
          comment:
            'Accounting for the 2.5% buffer, the offer of 2000 tCO2 corresponds to 2051.3 tCO2 embodied in biochar at the point of production. For consistency with other biochar projects, volume at production is decreased by 10% (to 1846.2 tCO2) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion. Project claims to produce biochar that is 78% C by mass, i.e. removing 2.86 tCO2/t biochar at production. The Puro platform credits this project with 2.4-2.8 kg CO2 / kg of biochar produced. Conservatively, this offer thus corresponds to the production of about 810.8 t of biochar.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.979,
          units: '',
          rating: 1.0,
          notes:
            'Project reports 0.05 tCO2 emitted for every ton of biochar produced. For consistency with other biochar projects, gross CO2 sequestration at production is decreased by 10% (to 2.58 tCO2/t biochar) to reflect volume of "permanently" sequestered CO2.  See Permanence for further discussion.',
          comment:
            'Analysis performed by third-party, as required by Puro. Boundary conditions well-specified and include emissions for feedstock harvest, transporation, and pyrolosis.',
          removal: 2.327,
          emissions: 0.05,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 1000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. Using the reported O:C ratio of 0.042 and a simple published model, we estimate that 90% of the biochar C will remain in [TK] years. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Feedstock is agricultural waste, specifically from seed production. Further analysis would require understanding the impact of carbon finance on the operation of the facility, and competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project specifics, and uses public analysis as required by Puro for LCA.',
        },
      ],
      tags: ['biomass', 'biochar'],
      id: 'MSFT131',
      description:
        'Biochar carbon stored in agricultural soils and urban green infrastructure.',
      applicant: 'Ecoera ',
      rating: '4',
      keywords: '',
      location: { name: 'Sweden' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.134',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.ecoera.se' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in paper-based insulation.',
          comment:
            'Project recycles newspaper into paper-based cellulose fibre insulation used in buildings. From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 10,000 tCO2 removal. An 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Volume is sourced from multiple facilities across Finland. Volume offer reflects buffer and LCA deductions. On Puro platfrom, seller claims 1.102 net tCO2 / t of insulation produced. This offer thus corresponds to the production of about 9047 t of paper-based insulation. This seems plausible given demontrated production capacity.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.935,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.087 tCO2 emissions for 1.34 tCO2 stored. Includes raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions generally well-specified and LCA components detailed and referenced. Paper products form a key component of the feedstock material, so it would be useful to characterize any emissions associated with their production.',
          removal: 1.34,
          emissions: 0.087,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50-100 year permanence.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests, but less is known about the specific insulation materials described here. We report 50 as the minimum of the claimed range.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Existing industry has been in production since the 1980s, so the production of insulation does not seem contingent on carbon incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation on LCA is available with third-party analysis as required by Puro (though not in English). Few public details available on manufacturing process.',
        },
      ],
      tags: ['biomass', 'materials'],
      id: 'MSFT132',
      description: 'Carbon net-negative insulation.',
      applicant: 'Ekovilla ',
      rating: '3',
      keywords: '',
      location: { name: 'Finland' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.135',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://puro.earth/services/net-negative-insulation-material-finland-100009',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in plantations.',
          comment:
            'Project collaborates with smallholder farmers to establish mixed timber plantations, or to plant trees for silvopasture or improved coffee agriculture.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 82800.0,
          units: 'tCO2',
          rating: -9999,
          notes:
            'Seller offers 82,800 tCO2 removal from the expansion of a grouped reforestation project in Nicaragua. The offered volume is just a portion of the total carbon benefits attributed to the project. A 15% buffer will be maintained to mitigate against reversals.',
          comment:
            "Project claims a removal rate of 21.4 tCO2/ha/yr for the initial growth of mixed-species plantations (the primary vehicle for project's carbon benefits).",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 50 year permanence.',
          comment:
            'Project appears to have a rolling ten-year lifetime which is renewed each year new participants are recruited to the program.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project plausibly changes the incentive structure around the land use of small-holder farmers in Nigaragua. Purchasing these carbon credits is more akin to contributing to fund the expansion of this project rather than paying for a particular carbon-removing activity.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant, detailed project information available from registry.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT133',
      description:
        'Regenerating forest ecosystems with smallholder farmers through the The CommuniTree Carbon Program.',
      applicant: 'Natural Capital Partners Americas',
      rating: '2',
      keywords: 'The CommuniTree Carbon Program',
      location: { name: 'Nicaragua' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.136',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.planvivo.org/communitree' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes: 'Project removes carbon for storage in mangrove forests.',
          comment:
            'Project plans to restore mangrove forests in state owned forest reserves by planting trees and pursuing interventions to reduce deforestation pressure. Validating project mechanisms would require specific project details which are not available.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100,000 tCO2 removal from planting 100,000 new mangrove trees over a 200 ha project area.',
          comment:
            "Seller claims project will remove 500 tCO2/ha over an unspecified time period. Mangrove structure, carbon sequestration rates, and total carbon stocks can vary tremendously. In most mangrove ecosystems, the majority of carbon is stored in the sediment. Validation of volume would require details regarding which carbon pools are accounted for in this offer and what the ecosystem's pre-restoration starting state is.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 20.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 20 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information on project specifics to evaluate additionality. Project takes place on government-owned forest preserve.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Some public information is available, including basic pilot project plan activities. More project implemenation specifics and methodology used for carbon benefit calculation would be necessary for further analysis.',
        },
      ],
      tags: ['forests'],
      id: 'MSFT135',
      description:
        'Niger Delta mangrove restoration and sustainable management. ',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: '',
      location: { name: 'Nigeria' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.138',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in re-established woodlands.',
          comment:
            'Project establishes mixed native woodlands on previous pasture land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 22890.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 22,890 tCO2 removal from reestablishing native woodland over a 47 ha project area. Project maintains a 21% risk buffer to mitigate against reversals.',
          comment:
            'Project claims a plausible a removal rate of 10 tCO2/ha/yr.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 49.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 70 year permanence.',
          comment:
            'Project lifetime appears to be 70 years (2000-2070), with 49 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual provided is continued use for sheep grazing and sporting lease.',
          comment:
            'Project does appear to have any value apart from its carbon benefits. However, planting over the project area was completed in 2000, 16 years before project applied for carbon credits. Since the woodland is well established, it is unclear if continued carbon payments are additional.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project details available from registry.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT137',
      description: 'Reforestation at the Ackron Woodland. ',
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Ackron Woodland ',
      location: { name: 'Scotland ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.140',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://mer.markit.com/br-reg/public/project.jsp?project_id=103000000004596',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment:
            'Project pays landowners to reduce forest harvest for a single year.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,000,000 tCO2 removal sourced from 11 southern US states. Each participating project is contracted for a single year of reduced harvest at a time.',
          comment:
            'As a result of the one year project duration, the volume of any given project should be relatively straightforward to confirm via stocking estimates. Plausibility of large total volume depends on the number of particpants.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Emissions estimates taken from Stripe Carbon Removal RFP, and based solely on the operations of the small office team that will run the program and a field team that periodically verify project conditions.',
          comment:
            'There is no reason to consider additional emissions given program design.',
          removal: 1000.0,
          emissions: 1.0,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Because SilviaTerra uses an annual contracting model, we report 1 year.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counteractual is active forest product harvest.',
          comment:
            'By shifting to a ton-year accounting framework, SilviaTerra intends to avoid additionality concerns by measuring actual carbon stored each year. However, other factors, such as exogenous shifts in timber markets, can still affect additionality considerations with respect to forest harvest decisions. Proprietary methods for measurement and verification against field plots are not yet available.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonably thorough description of program design. Details on specific projects or methods for project quantification or selection are not yet publicly available.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT141',
      description:
        'Microsoft pays US landowners to accelerate forest CDR through the SilviaTerra Natural Capital Exchange (NCAPX).',
      applicant: 'SilviaTerra',
      rating: '3',
      keywords: 'Natural Capital Exchange (NCAPX)',
      location: { name: 'USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.144',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.silviaterra.com/ncapx-story-pa',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in  biomass, and avoids emissions by preventing the decomposition of harvested biomass.',
          comment:
            'Project plants coppicing, woody plants and previously cleared farmland. Periodically, project harvests above-ground biomass and stores it to avoid decomposition.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,000,000 tCO2 removal from the future development of this biomass storage strategy. A 1.5% buffer will be maintained to mitigate against reversals.',
          comment:
            'Project seeks funding for a feasibility study. Project specifics, such as plant species and planting area would be needed to verify the volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.992,
          units: '',
          rating: 0.0,
          notes:
            'Project reports that 0.8% of total CDR is offset by project emissions.',
          comment:
            'No data or analysis of is available to verify this negativity claim.',
          removal: 1.0,
          emissions: 0.008,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 200.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 200 year permanence.',
          comment:
            'Permanence claim is based on the strategy of storing harvesting biomass to avoid decomposition. Long-term storage strategy is not specified. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is no commercial value to permanently storing harvested biomass. However, specific project details are lacking, making an evaluation of additionality difficult.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only public documentation currently available is the application to the Microsoft 2021 Carbon Removal RFP,  which does not include key details about project specifics or the methodology for calculating carbon benefits.',
        },
      ],
      tags: ['biomass'],
      id: 'MSFT142',
      description: 'Growing biomass for long-term storage.',
      applicant: 'EBS One ',
      rating: '1',
      keywords: '',
      location: { name: 'Australia ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.145',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emission from biomass decomposition by converting biomass to bio-oil via fast pyrolisis, and pumping bio-oil into geologic storage.',
          comment:
            'Project claims bio-oil purchased is in excess capacity from supplier, and that the source sawdust would have otherwise decomposed. From a narrow lifecycle perspective, the project avoids CO2 emissions because the source sawdust from which the bio-oil was procured would have decomposed, resulting in biogenic CO2 emissions. From a broad perspective, coupling biomass production, bio-oil production, and underground injection forms a carbon removal pathway. Geological sequestration capacity could become a constraint at larger scales.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 20000.0,
          units: 'tCO2',
          rating: 1.0,
          notes: 'Seller offers 20,000 t CO2 removal.',
          comment:
            'Given the claimed ratio of 1.19 tCO2 for 1 t of bio-oil, we infer 16,807 t of bio-oil will be procured. Assuming that amount of bio-oil can be procured, the volume is plausible.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.77,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.36 tCO2 emitted for 1.55 tCO2 sequestered, including emissions due to bio-oil production, transporation to well, and injection. Future efforts to co-locate a new well with bio-oil production will further reduce transport costs and emissions.',
          comment:
            'Boundary conditions for the LCA are well-specified and numbers derived from plausible (though approximate) sources, with thorough references.',
          removal: 1.55,
          emissions: 0.36,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Project is working with a well provider for injection, and is in the process of drilling a new well. Successful geological injection produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project claims bio-oil is purchased from supplier\u2019s unused, excess capacity, so would not have been used as a fossil fuel replacement. Project also claims that the source sawdust would have otherwise decomposed and would not have been used as a fossil fuel replacement. The high cost for the pilot project and the lack of inherent commercial value provide evidence of additionality. Some possibility that at larger scales bio-oil procurement would result in future expanded bio-oil production or that the future acquisition of biological feedstocks would compete with fossil fuel displacement.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project specifies process and plan in detail, and both the process components and their combination are based on existing demonstrations and published literature. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT143',
      description: 'Geological sequestration of bio-oil.',
      applicant: 'Charm Industrial',
      rating: '4',
      keywords: '',
      location: { name: 'Kansas, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.146',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://charmindustrial.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project provides up-front payment for farmers to convert the land from cropland to prarie grassland and use them for grazing or haying. Participating landowners must establish a permanent conservation easement.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 103600.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 103,600 tCO2 removal from an unknown project area.',
          comment:
            'Validation of volume would at a minimum require clear project specifics, or documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: -9999,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. [TK: impact of conservation easement; details not available]',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Project provides up-front carbon financing for the transition period before working lands converted back to grassland can be used for grazing or haying. This plausibly removed a barrier to landowner adoption.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'General project plan is clearly communicated. No information or data for project implementation specifics are publicly available.',
        },
      ],
      tags: ['soil', 'conversion'],
      id: 'MSFT144',
      description: 'Restoring cropland to working grasslands. ',
      applicant: 'Ducks Unlimited',
      rating: '1',
      keywords: '',
      location: { name: 'North Dakota & South Dakota, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.147',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.ducks.org/conservation/ecoassets/ducks-unlimiteds-carbon-program',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from the atmosphere using a liquid solvent. Captured carbon dioxide may be stored via geologic injection or utilized in industrial processes.',
          comment:
            'Opacity regarding the fate of captured CO2 prevents us from validating mechanism.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6000000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            "Seller seeks an offtake agreement for 6,000,000 tCO2 removal from DAC plants that will operate from 2025 onward. All plants will use Carbon Engineering's DAC technology.",
          comment:
            "Carbon Engineering's first industrial plants will be designed to capture 1M tCO2/year. A detailed schematic for a deployment of Carbon Engineering's technology at this scale was published in a peer reviewed paper from 2018, alongside data from a pilot project. If executed as modeled, the offered removal volume seems plausible.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating DAC projects, and is dependent on project-specific characteristics such the carbon intensity of the energy source and the end use of the captured CO2. There is not enough public information available to calculate negativity for this project.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Carbon Engineering indicates the intention to partner on plants that are eligible for California LCFS credits, leading to concerns about double counting. If captured CO2 is used for EOR or synthetic low carbon fuel, this could introduce questions about the appropriate baseline and/or double counting.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Possible sites from which the offered credits would be sourced are not yet identified.',
        },
      ],
      tags: ['dac', 'injection'],
      id: 'MSFT145',
      description:
        'Global opportunities for affordable, scalable DAC and storage at climate-relevant volumes.',
      applicant: 'Carbon Engineering',
      rating: '2',
      keywords: '',
      location: { name: '' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.148',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: 'Website', url: 'https://carbonengineering.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes mixed cottonwood and native hardwood forests.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 470000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 470,000 tCO2 removal from a grouped project of unknown acreage. The offered volume is just a portion of the total carbon benefits attributed to the project. A 20.5% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project claims a removal rate of 12.4 tCO2/ha/yr.  This falls on the high end of the plausible range provided by USFS yield tables (6.6 - 13.5 tCO2/ha/yr). The total area of this grouped project is not clearly reported, thus volume offered cannot be validated. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 27.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2008-2048), with 27 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of agricultural activity.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available for early instances of the program. Verified public information about the current state of the project\u2013including the total area of land enrolled\u2013is lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT146',
      description:
        'Restoring native forest ecosystems in the Mississippi Alluvial Valley through the GreenTrees ACRE program.',
      applicant: 'Natural Capital Partners Americas',
      rating: '1',
      keywords: 'GreenTrees ACRE (Advanced Carbon Restored Ecosystem)',
      location: { name: 'Mississippi Alluvial Valley, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.149',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://acr2.apx.com/mymodule/reg/TabDocuments.asp?r=111&ad=Prpt&act=update&type=PRO&aProj=pub&tablename=doc&id1=114',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in seaweed, which is sunk into the deep ocean for long-term storage.',
          comment:
            'Project grows seaweed on floating arrays below the ocean surface. Part of the seaweed grown is processed into saleable products to produce a return on investment for the floating arrays; the remainder is sunk into the deep ocean for long-term carbon storage.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6000.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Seller offers 6000 tCO2 removal.',
          comment:
            'Project claims that each floating array (0.5-1 square km) produces 9000-12,000 tons of seaweed, and sinks up to 6000 tCO2/year. The arrays float 25 m below the ocean surface, and a wave-powered pump brings nutrient rich water to the growing seaweed from deeper in the ocean. Assuming the proprietary array and pump technology work as claimed, the main barrier to validating this volume is the lack of species specificity or pilot project data.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 500.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 500 year permanence.',
          comment:
            'Carbon dioxide removed to lower ocean depths can be stable for millennia, but may affect ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectiveness, albeit a potentially very distant one.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only reason to implement a project that sinks seaweed is to generate climate benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'High-level descriptions of project and technology are available. Project specifics, technology publications or public data on demonstration projects would be needed for further analysis.',
        },
      ],
      tags: ['ocean'],
      id: 'MSFT147',
      description:
        'Marine permaculture grows seaweed, earns money, and sinks carbon. ',
      applicant: 'C-Combinator',
      rating: '2',
      keywords: '',
      location: { name: 'Massachusetts, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.150',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.c-combinator.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2100000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller claims 2,100,000 tCO2 removal from the restoration and altered management of coastal rainforest over a 22,855 acre project area. No information about a buffer pool is publicly available.',
          comment:
            'See Specificity comment. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity. See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment: 'See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactural specified. See Specificity Comment.',
          comment:
            '$20M from Bezos\' Earth Fund for "the Emerald Edge" may include part of this project. A carbon removal purchase would generate offsets to the extent it allows purchase of additional land. It is hard to isolate carbon benefits from conservation donation, with a potential for double counting.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Although project provides an official ACR ID, project does not appear in the public registry.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT150',
      description:
        'Tackling climate change and community resilience through the Washington Rainforest Renewal Project.',
      applicant: 'The Nature Conservancy',
      rating: '2',
      keywords: 'Washington Rainforest Renewal Project',
      location: { name: 'Washington, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.15',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.google.com/url?q=https://www.nature.org/en-us/about-us/where-we-work/united-states/washington/stories-in-washington/forest-restoration-conservation/&sa=D&source=editors&ust=1613080546774000&usg=AOvVaw3uqPU9uOk7Oq6bF8PwTHC8',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes bottomland hardwood forests on marginal agricultural lands.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 320000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 320,000 tCO2 removal from the expansion of a grouped project in the lower Mississippi valley.  A 10% risk buffer will be maintained to mitigate against reversals.',
          comment:
            'Seller does not specify plans for expansion. Thus, volume offered cannot be verified. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 22.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            "Project's contractual lifetime appears to be 32 years (2011-2043), with 22 years remaining which we report as the permanence. Paticipants must simultaneously enroll in USDA or Conservation Reserve programs that have 10, 15, or 30 year conservation commitments.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuated land use as pasture or cropland.',
          comment:
            'Project seeks funding for expansion without specific expansion plans provided. In this way, buying this offer is akin to contributing to a fund used to run the TNC program rather than paying for a particular carbon removal action. Note that all landowners participating in this project also enroll and recieve funding from a USDA Farm Bill Wetland Reserve Easement or Conservation Reserve programs which come with 10, 15, or 30 year conservation commitments. Project proponent claims that landowners would not have enrolled in these conservation programs without recieving additional carbon finance. Additional public information is needed to verify this claim.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available for only 1 of 11 project instances.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT151',
      description:
        'Restoring America\u2019s Amazon through the Lower Mississippi Grouped Afforestation Project.',
      applicant: 'The Nature Conservancy',
      rating: '2',
      keywords: 'Lower Mississippi Grouped Afforestation Project',
      location: { name: 'Louisiana, Mississippi, & Arkansas, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.153',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/919',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 202646.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 202,646 tCO2 removal over a 54,870 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. Project contributes 10% of carbon benefits generated to a buffer pool to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 88.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 88 year permanence.',
          comment:
            'Project appears to occur over 100 years (2008-2109), with 88 years remaining from date of review. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is a 15 year depletion of mature timber stocks, followed by a 100 year uneven harvest schedule.',
          comment:
            "Project is credited against an aggressive industrial harvest regime (inital harvest at 300,000 m^3/year average). The previous owner of the property practiced sustainable harvesting (57,000 m^3/year average) without carbon financing. The property was sold for $125-million, of which $25-million was provided by the federal government's Natural Areas Conservation Program and $65-million from private donations. Nature Conservancy Canada raised the $35-million ballance. The historical management practices and the conservation promises made at purchase call into question the additionality of further carbon payments.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT152',
      description:
        'Conservation-aimed forest management project at the Darkwoods. ',
      applicant: 'Natural Capital Partners Americas',
      rating: '1',
      keywords: 'Darkwoods ',
      location: { name: 'Canada' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.154',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/607',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in forests.',
          comment:
            'Project established mixed native species forest on previously deforested land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 100,000 tCO2 removal from a project that is projected to expand from 184 ha to 834 ha by 2027. The offered volume is just a portion of the total carbon benefits likely to be attributed to the project. A buffer pool will be maintained to mitigate against reversals following the VCS methodology.',
          comment:
            'Claimed removal rate is 16.5 tCO2/ha/yr, with a final standing stock of 495 tCO2/ha. Volume calculations are based upon locally developed carbon stock estimates, for which data and methodology are not available. Final standing stock estimate falls on the low end the range for restored Atlantic Forest of a similar age class in literature (490 - several thousand tCO2/ha).',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 37.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 37 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonably thorough description of program design.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT154',
      description:
        'Reforestation in Brazil through the Atlantic Forest Project. ',
      applicant: 'Natural Capital Partners Americas',
      rating: '2',
      keywords: 'Atlantic Forest Project',
      location: { name: 'Brazil ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.156',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://savingnature.com/atlantic-forest-of-brazil/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions by discouraging deforestation and degradation.',
          comment:
            'A suite of government-led incentives pay private landowners to reduce emissions from deforestation and forest degradation, and enhance forest carbon stocks.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 3519304.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Seller offers 3,519,304 tCO2 removal attributed to Costa Rica's REDD+ activities in 2016 and 2017. The offered volume is just a portion of the total carbon benefits attributed to the project in these years. An 11% buffer pool is maintained to mitigate against reversals.",
          comment:
            'There is not enough information about the implementation of REDD+ activities to validate this volume. Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 15.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 10,000 year permanence.',
          comment:
            'Project activities as described pay landowners to protect forest, change forest management plans, pursue reforestation, assist natural regeneration, or transition to agroforestry. The minimum contract period for which landowners must maintain payed-for results is 15 years. We report this as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            "Costa Rica's National Decarbonisation Plan aims for carbon neutrality by 2050. Seller claims that the sale of REDD+ carbon benefits will help Costa Rica reach its carbon neutrality goal by funding the expansion of program activities. Seller also indicates the intention to sell carbon benefits generated by the program activities in the future. As an investment in a specific quantity of carbon removal, there are concerns about double-counting, as Costa Rica may attempt to include the carbon benefits in its national carbon accounting in addition to selling them in the voluntary markets.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 15.0,
          units: '$/tCO2',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonably thorough description of program design. Details lacking regarding specific project implementation and methodology for estimating removal volume.',
        },
      ],
      tags: ['forests', 'redd+'],
      id: 'MSFT156',
      description:
        'Providing CDR from Costa Rica\u2019s National REDD+ Program. ',
      applicant: 'FONAFIFO',
      rating: '1',
      keywords: 'REDD+',
      location: { name: 'Costa Rica ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.158',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.fonafifo.go.cr/en/conozcanos/proyectos-actuales/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Project offers 10,000 tCO2 removal over a 6084.17 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 17.6% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 96.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2017-2117), with 96 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is timber harvesting constrained by CT state law and the conservation easement applied to the project area.',
          comment:
            'The project area is permanently protected under a conservation easement funded through the U.S. Forest Service Forest Legacy Program and held by the Connecticut Department of Environmental Protection.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Reasonable project details publicly available.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT157',
      description:
        'Supporting sustainable forestry and an educational non-profit through the Great Mountain Forest IFM Project. ',
      applicant: 'Climate Trust Capital Fund',
      rating: '1',
      keywords: 'Great Mountain Forest ',
      location: { name: 'Connecticut, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.159',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=371',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project establishes mixed cottonwood and native hardwood forests.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500000.0,
          units: 'tCO3',
          rating: 0.0,
          notes:
            'Seller offers 470,000 tCO2 removal from a project area of unknown acreage. The offered volume is just a portion of the total carbon benefits attributed to the project. A 20.5% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project claims a removal rate of 12.4 tCO2/ha/yr.  This falls on the high end of the plausible range provided by USFS yield tables (6.6 - 13.5 tCO2/ha/yr). The total area of this grouped project is not clearly reported, thus volume offered cannot be validated. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 27.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            'Project lifetime appears to be 40 years (2008-2048), with 27 years remaining.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of agricultural activity.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available for early instances of the program. Verified public information about the current state of the project\u2013including the total area of land enrolled\u2013is lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT158',
      description:
        'Restoring native forest ecosystems in the Mississippi Alluvial Valley through the GreenTrees ACRE program.',
      applicant: 'GreenTrees',
      rating: '1',
      keywords: 'GreenTrees ACRE (Advanced Carbon Restored Ecosystem)',
      location: { name: 'Mississippi Alluvial Valley, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.160',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.green-trees.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Project offers 100,000 tCO2 removal over a 113,808 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 17.6% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 96.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Project lifetime appears to be 100 years (2017-2117), with 96 years remaining, which we report as the permanence.  Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual is management for the maximum legal timber harvest.',
          comment:
            'Project area has been owned by The Nature Conservancy and managed for conservation goals since 1998. The project area was not registered to recieve carbon credits until 2017. Given this history, and the goals of TNC as an owner, the claimed baseline seems implausably aggressive.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT159',
      description:
        'Blending carbon and timber revenues for diverse forest management goals in the Upper St. John Forest. ',
      applicant: 'Climate Trust Capital Fund',
      rating: '1',
      keywords: 'Upper St. John Forest',
      location: { name: 'Maine, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.161',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://acr2.apx.com/mymodule/reg/prjView.asp?id1=427',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 90000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 90,000 tCO2 from a 13,914 ha project area. This is a combined offering from seven projects under the TIST Kenya umbrella. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'This is a combined offer from seven distinct grouped projects in Kenya, all under the TIST umbrella. Seller does not attribute carbon benefits offered specific projects. Projects estimate net CO2 removal based on four tree classes, and allow farmers to choose which species to plant on their land. The uncertainty inherent in the reporting structure of the grouped project makes it difficult to verify the offered volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 12.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 45 year permanence.',
          comment:
            'All seven sub-project lifetimes appear to be 30 years (2004-2033), with 12 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project activities started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of carbon credits from that period of time.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design and early instances of this grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT160',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Kenya. ',
      applicant: 'Natural Capital Partners Americas',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Kenya' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.162',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.tist.org/i2/kenya.php' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in timber plantations innoculated with mycorrhizal fungi.',
          comment:
            'Project establishes Pine and Eucalyptus plantations with claimed growth enhancement from mycorrhizal innoculation. Project completes two 20 year harvest rotations of Pine and four 10 year harvest cycles for Eucalyptus during project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1200000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,200,000 tCO2 removal from a ~6000 ha project area. A 10% buffer is maintained to mitigate against reversals.',
          comment:
            'Project claims removal rate of 23.9 tCO2/ha/yr for Pinus radiata which is well above published ranges (15-21 tCO2/ha/yr). Project claims 21.7 tCO2/ha/yr removal for Eucalyptus globulus, which falls on the high end of published ranges (13-23 tCO2/ha/yr).  This pattern may be explained by the claimed growth enhancement as a result of mycorrhizal innoculation (41% and 47% respectively), but there is not sufficient public information to verify the efficacy of the innoculant. Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            'Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continuation of degraded grassland.',
          comment:
            'Project is crediting for activities starting in 2003. At least half of the claimed project area was planted by 2009, four years before registration as an offset project in 2013. All project instances up until at least 2009 recieved a significant government subsidy that covered 75-90% of the costs associated with establishing the project plantations. These government loans must be payed back at first harvest, ensuring the growth of established plantations. This calls into question the additionality of further carbon finance.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available. Third party verification of innoculant efficiacy lacking.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT161',
      description:
        "Establishing plantations in Chile using Mikro-Tek's proprietary mycorrhizal innoculation technology. ",
      applicant: 'ClimateCare Oxford',
      rating: '1',
      keywords: 'Mikro-Tek',
      location: { name: 'Chile' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.163',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1055',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.',
          comment:
            'Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 4000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 4000 tCO2 removal from the single-chance purchase of a batch of finely ground olivine from a mining waste stream.',
          comment:
            'Specific deployment plan for this singe-chance purchase is not specified. Both application to soils and application along railroads are mentioned. Seller claims to sell only the first ten years of carbon benefits from this olivine deployment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Boundary conditions for a location-specific LCA is well-specified. Not enough information is available to estimate or calculate the negativity.',
          removal: 'NA',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'More information regarding the alternative uses of finely ground olivine powder would be useful to verify additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Basic technology is reasonably well-described in the published literature. Details regarding specific project, the rate of removal as a function of ground olivine size, and LCA estimates would be useful for further analysis.',
        },
      ],
      tags: ['mineralization', 'powder'],
      id: 'MSFT162',
      description: 'CO2 removal with olivine.',
      applicant: 'GreenSand',
      rating: '2',
      keywords: '',
      location: { name: 'Duisburg, Germany ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.164',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.greensand.nl' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in farmer-owned trees.',
          comment:
            'Project partners with small-holder farmers to plant trees on farmer-owned land.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 200000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 200,000 tCO2 removal from a 5280 ha project area.  This is a combined offering from two sub-projects in Kenya. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is maintained to mitigate against reversals.',
          comment:
            'This is a combined offer from two distinct grouped projects in Kenya, both under the TIST umbrella. Seller does not attribute carbon benefits offered to one project or the other. Projects estimate net CO2 removal based on four tree classes, and allow farmers to choose which species to plant on their land. The uncertainty inherent in the reporting structure of the grouped project makes it difficult to verify the offered volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 12.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims a 100 year permanence.',
          comment:
            'Both sub-project lifetimes appears to be 30 years (2004-2033), with 12 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Project activities started in 2003, but did not register to recieve carbon credits until 2013. Between 2003 and 2013, the TIST program recieved significant international funding, calling into question the additionality of carbon credits from that period of time.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable details provided on project design and early instances of this grouped project.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT163',
      description:
        'Reforestation project with small-holder farmers through the TIST Program in Kenya. ',
      applicant: 'ACT Commodities',
      rating: '1',
      keywords: 'TIST Program',
      location: { name: 'Kenya ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.3',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.tist.org/i2/kenya.php' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests.',
          comment:
            'Project assists plants indigeneous tree species and assists natural regeneration in Kibale National Park.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 55000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 55,000 tCO2 removal from a 6212 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project predicts a carbon removal rate of 12.38 tCO2/ha/yr over the project lifetime. We were unable to find a third party validation of this high removal rate.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 48.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 48 year permanence.',
          comment:
            'Project lifetime appears to be 60 years (2009-2069), with 48 years remaining. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued encroachment on national park land for agricultural activities, unchecked fire on degraded land, and a partial regeneration of pioneer begetation.',
          comment:
            'Reforestation in the project area started in 1994, a year after it was designated as a national park. The project registered for carbon offset credits with Verra in 2011, and projected that forest planting would be complete by 2016. More documentation would be needed to verify the claim that the project activities would not continue in the absence of carbon finance.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT164',
      description:
        'Restoration of degraded areas in the Kibale National Park. ',
      applicant: 'Natural Capital Partners Americas',
      rating: '1',
      keywords: 'Kibale National Park',
      location: { name: 'Uganda' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.64',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://facethefuture.com/projects/uganda-kibale-reforestation',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from the atmosphere for sequestration in plantations.',
          comment:
            'Project establishes teak plantations on previously barren lands and completes to 25-year harvest cycles within the project period.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 100,000 tCO2 removal over an unknown project area in in Mexico. The offered volume is just a portion of the total carbon benefits attributed to the project. An 20% risk buffer pool is set aside to mitigate against potential reversals.',
          comment:
            'This grouped project predicted rapid expansion from 2014-2020, however there is no documentation about its actual expansion pattern. Not knowing the project area in question, it is not possible to validate the claimed volume. Grouped project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 42.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 61 year permanence.',
          comment:
            'Project lifetime appears to be 54 years (2009-2062), with 42 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued land use for cattle grazing.',
          comment:
            'Proteak, the project proponent, is the largest forestry company in Mexico. Proteak was establishing analagous teak plantations to those included in this project for seven years leading up to 2009, the beginning of the Verra crediting period, and the project did not register with Verra until 2014. This suggests that these teak plantations may not require carbon financing to be economically viable.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonable project detail available for the pre-2014 project instances, but no documentation surrounding planned grouped project expansion.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT165',
      description:
        'Establishing teak plantations through the Fresh Breeze Afforestation Project. ',
      applicant: 'ACT Commodities',
      rating: '1',
      keywords: 'Fresh Breeze Afforestation Project',
      location: { name: 'Mexico' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.16',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1141',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions from forest loss.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 33113.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 33,113 tCO2 removal from a 22,800 acre project area. The offered volume is just a portion of the total carbon benefits attributed to the project.',
          comment: 'There is not enough information to validate this volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 40 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available, though seller indicates that project land is put under conservation easement.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'There is not enough information on project specifics to evaluate additionality. Project takes place on government-owned forest preserve.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Public documentation available only via the Microsoft 2021 Carbon Removal RFP. Key project details are not publicly available, including specific project areas and methodology for calculating carbon benefits.',
        },
      ],
      tags: ['forests', 'ifm'],
      id: 'MSFT166',
      description: 'Improving management of U.S. Working Forests. ',
      applicant: 'The Conservation Fund',
      rating: '1',
      keywords: '',
      location: { name: 'Wisconsin & New Hampshire, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.166',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: '' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forest plantations.',
          comment:
            'Project establishes eucalyptus plantations and harvest on a 22-year rotation.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1000000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Seller offers 1,000,000 tCO2 removal from 20,877 ha project area.  The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project predicts a carbon removal rate of 23.4 tCO2/ha/yr. This is on the high end of a plausible published ranges for Eucalyptus (13.4-23.65 tCO2/ha/yr). Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 45.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 86 year permanence.',
          comment:
            "Project's lifetime appears to be 60 years (2006-2066), with 45 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual specified is continued cattle grazing.',
          comment:
            'Project plantations were fully planted by 2011, a year before registration as an offset project. Future carbon removals appear to be guarenteed without additional carbon financing.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT167',
      description: 'Establishing the Guanare forest plantations. ',
      applicant: 'Hardwick Climate Business Limited',
      rating: '1',
      keywords: 'Guanare ',
      location: { name: 'Uruguay' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.167',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/959',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forest plantations.',
          comment:
            'Project establishes eucalyptus and pine plantations, with a 16 or 21-year harvest rotations, respectively.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 1,000,000 tCO2 removal from a 18,191 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% risk buffer is maintained to mitigate against reversals.',
          comment:
            'Project predicts a carbon removal rate of 31.6 tCO2/ha/yr. This is above plausible published ranges for Eucalyptus (13-24 tCO2/ha/yr) or Pinus (15-21 tCO2/ha/yr). Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 85.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 106 year permanence.',
          comment:
            "Project's lifetime appears to be 100 years (2006-2106), with 85 years remaining, which we report as the permanence. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual specified is continued cattle grazing.',
          comment:
            'Project plantations were fully planted by 2013. Future carbon removals appear to be guarenteed without additional carbon financing.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT170',
      description:
        'Establishing the Weryerhaeuser Uruguay forest plantations. ',
      applicant: 'Hardwick Climate Business Limited',
      rating: '1',
      keywords: 'Weyerhaeuser',
      location: { name: 'Uruguay' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.170',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/960',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Project removes carbon from atmosphere via sequestration in phytoplankton and transport of phytoplankton biomass to the deep ocean.',
          comment:
            'Novel early-stage technology with field-trial demonstrations in progress. Wave-powered pumps produce artificial upwelling, stimulating primary production on ocean surface, and downwelling. Dissolved carbon storage in deep oceans raises potential long-term carbon cycle and ocean acidification questions.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6800.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 6800 tCO2 removal from the deployment of 3 pumps.',
          comment:
            'Difficult to assess volume due to early stage of technology.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.931,
          units: '',
          rating: 0.0,
          notes:
            "Reported ratio based on project materials, transportation, and business overhead, totalling 270 tCO2 emissions for the one time deployment of a single pump. Seller claims 15 year active deployment period, and 261.5 tCO2 sequestered per year for each pump, for a total 3922.5 tCO2 sequestered over a pump's active lifetime.",
          comment:
            'Project emissions specified in detail, but difficult to validate because technology is early-stage and experimental.',
          removal: 3922.5,
          emissions: 270.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 500.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 500 year permanence.',
          comment:
            'Carbon dioxide removed to lower ocean depths can be stable for millennia, but may affect ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectiveness, albeit a potentially very distant one.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only reason to implement artifical upwelling and downwelling is to generate climate benefits, and no such projects are operating today.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonably thorough description of technology with references. Specific publications or public data on demonstration projects not available.',
        },
      ],
      tags: ['ocean', 'phytoplankton'],
      id: 'MSFT171',
      description:
        'Wave-powered upwelling/downwelling for carbon\u200b sequestration.',
      applicant: 'Ocean-based Climate Solutions',
      rating: '1',
      keywords: '',
      location: { name: 'Pacific Ocean (near Hawaii)' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.171',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'www.ocean-based.com' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in silvopasture systems.',
          comment:
            'Project plants Pongamia pinnata trees in cattle pastures. Trees are harvested to produce biofuel feedstock and cattle feed.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 447622.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 447,622 tCO2 removal from an unspecified project area. The offered volume is just a portion of the total carbon benefits attributed to the project.',
          comment:
            'Claims to produce 1 million Pongamia trees annually, with plans to scale to 3-5 million in the future. There is not enough information about the planting, growth assumptions, or harvest patterns to verify this volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity. Pangam Pinnata trees are harvested to produce a crude oil feedstock for "renewable diesel fuel," and the leftovers from oil production are used as cattle feed. A lifecycle analysis, with clear harvest projections, would be critical for understanding the net carbon sequestration of this project.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'Counterfactual is cattle grazing on pastures without trees.',
          comment:
            'Project produces two marketable harvest products. More information is needed to understand the importance of carbon finance to the business model.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Key project details are not publicly available, including specific project areas and methodology for calculating carbon benefits.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT172',
      description: 'Chaco Pongamia reforestation project. ',
      applicant: 'Investancia Paraguay S.A.',
      rating: '1',
      keywords: 'Chaco Pongamia, REDD+',
      location: { name: 'Paraguay' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.172',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://investancia.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in bamboo.',
          comment:
            'Project establishes commercial bamboo plantations on degraded pature lands.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 105000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 105,000 tCO2 removal over a 2361 ha bamboo plantation area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 10% buffer pool is set aside to mitigate against reversals.',
          comment:
            'Project predicts a carbon removal rate of 40.57 tCO2/ha/yr. This is at the high end of published ranges for a variety of bamboo species (the majority falling between 16 and 44 tCO2/ha/yr). Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Project claims 20 years permanence.',
          comment:
            'Project lifetime appears to be 20 years (2011-2031), with 10 years remaining, which we report as the permanence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified is continued low intensity cattle grazing or conversion to large scale oil palm plantations.',
          comment: 'Project',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Significant project information available.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT173',
      description:
        'Reforestation with native bamboo by Ecoplanet Bamboo Central America. ',
      applicant: 'ACT Commodities',
      rating: '2',
      keywords: 'Ecoplanet Bamboo Central America',
      location: { name: 'Nicaragua' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.173',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1085',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project makes a general claim of increased soil carbon from changes to cattle grazing management. Validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 11250.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 11,250 tCO2 removal from a 3,914 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool is maintained to mitigate against reversals.',
          comment:
            'Validation of volume would at a minimum require clear project specifics, or documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 25 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Seller indicates that project activities started in 2017. The carbon benefits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 4 years ago. Significant co-benefits for cattle carrying capacity are claimed alongside carbon benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few project specifics are available. No data or methodology for estimating carbon benefits is available.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT175',
      description:
        'Soil organic carbon sequestration at Wangella Pastoral Pty Ltd.',
      applicant: 'Regen Network Development',
      rating: '1',
      keywords: 'Wangella Pastoral',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.175',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.regen.network/registry/projects/wongella',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project makes a general claim of increased soil carbon from changes to cattle grazing management. Validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 22500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 22,500 tCO2 removal from a 2500 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool is maintained to mitigate against reversals.',
          comment:
            'Claims 2-5% increase in soil organic carbon, but no data is provided. Validation of volume would at a minimum require clear project specifics, or documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 25 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Seller indicates that project activities started in 2017. The carbon benefits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 4 years ago. Significant co-benefits for cattle carrying capacity are claimed alongside carbon benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few project specifics are available. No data or methodology for estimating carbon benefits is available.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT176',
      description: 'Soil organic carbon sequestration at Woodburn. ',
      applicant: 'Regen Network Development',
      rating: '1',
      keywords: 'Woodburn',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.176',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.regen.network/registry/projects/woodburn',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project makes a general claim of increased soil carbon from changes to cattle grazing management. Validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 70000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 70,000 tCO2 removal from a 10,000 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool is maintained to mitigate against reversals.',
          comment:
            'Validation of volume would at a minimum require clear project specifics, or documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 25 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'Seller indicates that project activities started in 2017. The carbon benefits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 4 years ago. Significant co-benefits for cattle carrying capacity are claimed alongside carbon benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few project specifics are available. No data or methodology for estimating carbon benefits is available.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT177',
      description: 'Soil organic carbon sequestration at Cavan Station. ',
      applicant: 'Regen Network Development',
      rating: '1',
      keywords: 'Cavan Station',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.176',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.regen.network/registry/projects/cavan-station',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes: 'Removes carbon from atmosphere for sequestration in soil.',
          comment:
            'Project makes a general claim of increased soil carbon from changes to cattle grazing management. Validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 22500.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 22,500 tCO2 removal from a 1854 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A buffer pool is maintained to mitigate against reversals.',
          comment:
            'Validation of volume would at a minimum require clear project specifics, or documentation of methodology used.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 25.0,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 25 year permanence.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is specified.',
          comment:
            'According to the landowner website, project activities started in 2013. The carbon benefits offered are not clearly vintaged, leading to the concern the carbon benefits sold in this offer could have been generated up to 8 years ago. Significant co-benefits for cattle carrying capacity are claimed alongside carbon benefits.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few project specifics are available. No data or methodology for estimating carbon benefits is available.',
        },
      ],
      tags: ['soil', 'rangeland'],
      id: 'MSFT178',
      description: 'Soil organic carbon sequestration at Wilmot Cattle Co.',
      applicant: 'Regen Network Development',
      rating: '1',
      keywords: 'Wilmot Cattle',
      location: { name: 'Australia' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.178',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.regen.network/registry/projects/wilmot',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests and peatland, and avoids emissions by reducing deforestation, fire risk, and peatland decomposition.',
          comment:
            'Project activities include rewetting drained peatland areas, conserving existing natural peat areas, implementing fire control measures, and allowing the natural regeneration of vegetation.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 500000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 500,000 tCO2 of removal from a 22,922 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 14% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 18.0,
          units: 'years',
          rating: 1.0,
          notes: 'Project claims 47 year permanence.',
          comment:
            'Project lifetime appears to be 47 years (2016-2062), with 42 years remaining. The Carbon Storage and Sequestration license that gives the proponents tenure over the project area is a 25-year license, extendable up to 50 years. This license was granted in 2013, implying an 18 year horizon on the current license. We report the minimum of these two time periods.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified as continued degradation of peatland and conversion of some of the project area into industrial acacia plantations.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT179',
      description: 'Restoration of the Sumatra Merang Peatland. ',
      applicant: 'ACT Commodities',
      rating: '2',
      keywords: 'Sumatra Merang Peatland',
      location: { name: 'Indonesia ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.4',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://registry.verra.org/app/projectDetail/VCS/1899',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests and peatland, and avoids emissions by reducing deforestation, fire risk, and peatland decomposition.',
          comment:
            'Project activities include rewetting drained peatland areas, conserving existing natural peat areas, implementing fire control measures, and natural regeneration of forest vegetation.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 5915842.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller claims 5,915,842 tCO2 of removal from a  22,922 ha project area. The offered volume is just a portion of the total carbon benefits attributed to the project. A 14% buffer is maintained to mitigate against reversals.',
          comment:
            'Seller claims to offer removal only. Since registries do not track removal and avoided emissions as separate types of carbon benefits, there is no way to verify that the removal slice of the project has not already been sold, or will not be sold again in the future. Project methodology includes carbon removal attributed to soil.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity.  See Specificity comment.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 18.0,
          units: 'years',
          rating: 1.0,
          notes: 'Project claims 47 year permanence.',
          comment:
            'Project lifetime appears to be 47 years (2016-2062), with 42 years remaining. The Carbon Storage and Sequestration license that gives the proponents tenure over the project area is a 25-year license, extendable up to 50 years. This license was granted in 2013, implying an 18 year horizon on the current license. We report the minimum of these two time periods.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes:
            'Counterfactual specified as continued degradation of peatland and conversion of some of the project area into industrial acacia plantations.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Significant project information available from multiple public sources.',
        },
      ],
      tags: ['forests', 'reforestation'],
      id: 'MSFT180',
      description: 'Restoration of the Sumatra Merang Peatland. ',
      applicant: 'PT Global Alam Lestari',
      rating: '2',
      keywords: 'Sumatra Merang Peatland',
      location: { name: 'Indonesia ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.179',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://ecosphere.plus/sumatra-merang-peatland/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for storage in forests, and avoids emissions by discouraging deforestation and degradation.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 28.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 28 tCO2 removal from an 493,569 project area. The offered volume is a small portion of the total carbon benefits that will be attributed to the project.',
          comment:
            'There is not enough information to validate this volume. See Specificity comment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'There is not enough information to calculate or verify negativity. Pangam Pinnata trees are harvested to produce a crude oil feedstock for "renewable diesel fuel," and the leftovers from oil production are used as cattle feed. A lifecycle analysis, with clear harvest projections, would be critical for understanding the net carbon sequestration of this project.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 100 year permanence.',
          comment:
            "No information regarding the project's contractual commitments is available. Socioeconomic risks are significant on this time horizon due to the risk of default or bankruptcy.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: 'No counterfactual is provided.',
          comment:
            'Neither project activities nor the baseline against which the project is credited are clearly documented. See specificity comment.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Key project details are not publicly available, including specific project areas, specific project activities, and methodology for calculating carbon benefits.',
        },
      ],
      tags: ['forests', 'redd+'],
      id: 'MSFT181',
      description: 'Bolomba & Ingende REDD+ projects. ',
      applicant:
        'Pan-African Environmental Conservation and Development Company',
      rating: '1',
      keywords: 'REDD+, Bolomba, Ingende ',
      location: { name: 'Democratic Republic of Congo' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.180',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url: 'https://www.pecdcgroup.com/current-project',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere via sequestration in kelp and transport of kelp biomass to the deep ocean.',
          comment:
            "Project grows kelp on floating 'microfarm' line assemblies. After a period of drifting and growing, assembly loses buoyency and sinks kelp biomass into the deep ocean for long term sequestration.",
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 10,000 tCO2 removal from the deployment of offshore micro-farms.',
          comment:
            'Feasibility study for offshore microfarms currently underway. Data to be released before proposed Debember 2021 microfrarm deployment.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Project emissions include embodied carbon of materials and assembly process, operation of kelp nursery, transporation, and ecological dynamics of kelp near the ocean surface. There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes: 'Seller claims 1000 year permanence.',
          comment:
            'Carbon dioxide removed to lower ocean depths can be stable for millennia, but may affect ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectiveness, albeit a potentially very distant one.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'The only reason to implement a project that sinks kelp is to generate climate benefits, and no such projects are operating today.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Reasonably thorough description of technology with references. Project specifics are well defined. Specific publications or public data from the feasibility study would be useful for further analysis.',
        },
      ],
      tags: ['ocean'],
      id: 'MSFT183',
      description:
        'Open ocean kelp farming for carbon sequestration in oceanic sediments.',
      applicant: 'Running Tide ',
      rating: '2',
      keywords: '',
      location: { name: 'Atlantic Ocean ' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.182',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'https://www.runningtide.com/' },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Avoids emissions from biomass resources, transforming them into a fuel, capturing the CO2 upon combustion for geologic storage.',
          comment:
            "Project uses torrefaction to turn waste wood into fuel suitable for a coal-fired power plant. Project seeks to add CCS to the power plant, and store the captured emissions in basalt formations. From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production. Project's ability to produce torrefied wood is demonstrated. Project's partnership with the proposed power plant is not verifiable.",
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 600000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 600,000 t CO2 removal on an uspecified timeline.',
          comment:
            'The production of torrefied wood that would embody 600,000 tCO2 is plausible, but permanent sequestration depends on the CCS portion of the proposal. The partnership between the torrefied wood producer and the power plant is not verifiable. Seller does not specify the carbon capture technology to be used, or a specific storage strategy. See Permanence comment for more discussion.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Negativity is a key parameter for evaluating BECCS projects. LCA details are available for the the production of torrefied wood, but not for the CCS portion of the project. There is not enough information to calculate negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes: '',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage. However, project lacks details regarding the CCS portion of the project and permanence cannot be validated.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'There is not enough information to evaluate additionality.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few project details are avialable. Critical elements, including key partnerships, details regarding the CCS strategy, and full project LCA remain undefined.',
        },
      ],
      tags: ['biomass', 'injection'],
      id: 'MSFT185',
      description: 'Using torrefied wood from forest restoration for BECCS. ',
      applicant: 'United States Endowment for Forestry and Communities',
      rating: '1',
      keywords: '',
      location: { name: 'Oregon, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.184',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: {
        name: '',
        url:
          'https://www.usendowment.org/what-we-do/wood-to-energy/oregon-torrefaction/',
      },
    },
    {
      type: 'Project',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'Project produces biochar, and embeds it in secondary producs (e.g. packaging, plastics, cement). The products are then sold with the embedded carbon benefit. From a narrow lifecycle perspective, the production of biochar only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 100000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Seller offers 100,000 tCO2 removal embedded (literally and figuratively) in secondary materials like cement and mycelium-based packaging.',
          comment:
            'Project specifics around biochar production would be needed to verify this volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: '',
          comment:
            'Life cycle analysis, including the emissions associated with embedding biochar in secondary products, is important for understanding the net carbon benefits of this offer. There is not enough information to calculate or verify negativity.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: -9999,
          units: 'years',
          rating: 1.0,
          notes: 'Seller claims 5000 year permanence.',
          comment:
            'For consistency in reporting biochar projects, we report permanence as the approximate duration over which 90% of biochar C remains. In this case, the O:C ratio is not available.  [TK: years].',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: -9999,
          notes: '',
          comment: 'Feedstock for biochar is waste wood.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 'N/A',
          units: '',
          rating: -9999,
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: -9999,
          notes: '',
          comment:
            'Few details provided on project specifics. Public documentation on chemical composition of biochar and LCA of secondary producs are not available.',
        },
      ],
      tags: ['biomass', 'biochar / materials'],
      id: 'MSFT188',
      description: 'Embedded biochar in daily products. ',
      applicant: 'Biochar Now',
      rating: '2',
      keywords: '',
      location: { name: 'Colorado, USA' },
      source: {
        name: 'Microsoft 2021 CDR RFP',
        license: 'CC-BY-4.187',
        url:
          'https://app.powerbi.com/view?r=eyJrIjoiOGM2MGFlNGYtMGNlNy00YzY5LWEyMTAtOTA0ODEyNzEzYTczIiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9',
      },
      revisions: [{ date: '01-20-2021', note: 'First release.' }],
      documentation: { name: '', url: 'http://biocharnow.com/' },
    },
  ],
}
