Ext.define('RESCITE.data.Resume', {
    singleton: true,

    hero: {
        name: 'Oscar Ayala',
        title: 'Software Quality Assurance Analyst <span class="rs-sep">·</span> Agentic AI Practitioner',
        tagline: 'Lead QA on a React-based capital construction SaaS. I build the agentic AI workflows that test the software — not just use them.',
        location: 'Wylie, TX (DFW) <span class="rs-dot">•</span> Open to on-site, hybrid, or remote',
        photo: 'resources/images/oscar-headshot.jpg'
    },

    about: [
        "I'm a Software Quality Assurance Analyst with nearly a decade across healthcare software and capital construction SaaS — and the QA field is in the middle of a major transformation. Titles like \"QA Analyst\" are giving way to Quality Engineer, AI Quality Engineer, Agentic QE. I'm not watching that shift from the sidelines; I'm living it.",
        "At Projectmates by Systemates I'm the lead QA on a React-based capital construction platform spanning 30+ modules. I built our <strong>Agentic QA Framework</strong> from the ground up using Claude Code CLI as the orchestration engine — autonomous module discovery, ADO test case generation, Playwright E2E automation, App Insights triage, UI mockup generation. My teammates use it as part of their daily workflow.",
        "I'm not a developer, but my technical foundation goes well beyond a typical QA role: C++ and Python coursework, SQL Server proficiency, IIS administration exposure, REST/React/ExtJS at QA-readable depth, hands-on integration of Claude / GPT / Gemini into real workflows. Three completed Anthropic courses on AI fluency and product stack.",
        "My philosophy: with AI, the constraint is imagination and design — not execution. The career trajectory is deliberate: toward AI-augmented test architecture at the frontier where software quality and artificial intelligence meet."
    ],

    stats: [
        { value: '9+',  label: 'Years in QA and IT support' },
        { value: '30+', label: 'Modules under test at Projectmates' },
        { value: '8',   label: 'Certifications earned' },
        { value: '3',   label: 'Anthropic courses completed' }
    ],

    experience: [
        {
            company: 'Projectmates by Systemates Inc.',
            role:    'Software Quality Assurance Tester (Lead QA)',
            dates:   'Apr 2024 – Present',
            location: 'Richardson, TX',
            summary: 'Lead QA on Projectmates — Systemates’ award-winning React-based capital construction management SaaS spanning 30+ modules (RFIs, Submittals, Budgets, Documents, Action Lists).',
            bullets: [
                'Built the <strong>Agentic QA Framework</strong> from the ground up: Claude Code CLI orchestrates autonomous module discovery, ADO test case generation, Playwright E2E automation, App Insights exception triage, and UI mockup generation. Used daily by teammates.',
                'Devise and implement test strategies that adequately assess all software aspects across 30+ modules — <strong>functional, integration, regression, validation, exploratory, UAT, mobile experience, UI, and cross-browser</strong> coverage throughout the sprint lifecycle.',
                'Analyze user requirements, design documents, and ADO work items to develop detailed test cases. Author ADO-importable test case CSVs, feature maps, gap analyses, and per-module technical documentation. Use <strong>Azure DevOps</strong> for test management, defect tracking, and end-to-end traceability.',
                'Identify, document, and triage defects with <strong>clear reproduction steps, severity, and impact</strong>. Analyze logs and system behavior to investigate root cause; track defects end-to-end from identification through resolution and regression verification.',
                'Participate actively in <strong>Agile ceremonies</strong> — backlog refinement, sprint planning, daily stand-ups, sprint reviews, and retrospectives. Partner with development, product, and customers to determine test coverage and clearly communicate issues found.',
                'Contribute to and expand <strong>automated test coverage</strong> — maintain and grow a Playwright (JavaScript) E2E suite covering navigation, access rights, data entry, and bulk operations. Live SQL Server data prospecting against the testing environment validates integrity and reproduces defects.',
                'Collaborate with other QA engineers to improve standards, tooling, and best practices. Produce pixel-accurate HTML mockups for proposed UI changes from ADO work item specs.'
            ]
        },
        {
            company: 'AlixaRx',
            role:    'Quality Assurance Analyst',
            dates:   'Apr 2021 – Mar 2024',
            location: 'Plano, TX',
            summary: 'QA on a custom .NET/C# LTC pharmacy platform (FrameworkLTC) serving nursing homes, prisons, and VA facilities across the U.S.',
            bullets: [
                'Maintained positive working relationships with client management, Pharmacy Operations, and customers — responding to concerns, issues, and requests; providing information on solution options with clear advantages, disadvantages, and associated risks.',
                'Scheduled and facilitated weekly cross-functional meetings with Developers, Operations, and the Product Owner (Scrum cadence) to set project priorities, proactively identify problem areas, coordinate resolution, and ensure projects progressed on schedule. Coordinated modifications, enhancements, and production issues across team members.',
                'Defined test objectives, created test plans, and wrote test scenarios exercising functionality requirements. Verified programming results for integrated application testing by comparing against production, reviewing UI, and reviewing reports. Reviewed teammates’ test scenarios and provided peer feedback.',
                'Identified scope, severity, and root cause of simple and complex application problems — questioning Operations and the Product Owner, reviewing documentation, reproducing issues, and researching the software. Recognized potential impact and scope of various problem solutions on the operating environment.',
                'Authored written documentation including application flows, data flows, and user guides. Maintained test plans, cases, scenarios, and reports with precision and traceability using ADO, TestComplete (SmartBear), and Microsoft Test Manager. Managed defect lifecycle end-to-end (identification → report → resolution → regression verification).',
                'Monitored small to medium tasks and communicated status (resolutions, estimated completion dates, changes, issues) to supervisor, team, and customers as appropriate. SQL Server (SSMS) for test data management, integrity checks, and query-based validation; kept test environments mirrored to production.'
            ]
        },
        {
            company: 'AlixaRx',
            role:    'Pharmacy Technical Support Analyst',
            dates:   'Aug 2017 – Apr 2021',
            location: 'Plano, TX',
            summary: 'Tier-2 technical support for LTC pharmacies, prisons, VA facilities, and nursing homes nationwide.',
            bullets: [
                'Received problems from end users via telephone and other electronic communication; prioritized, coordinated, and communicated resolutions while establishing and maintaining strong customer relationships across pharmacy operations, customers, and engineering.',
                'Resolved or escalated tickets via Atera and ASTEA; remoted into customer environments to minimize patient-care downtime. Initiated and adhered to escalation protocols — working closely with local support, national support, and OEM partners to define and support corrective action plans that resolved customer issues in a timely manner.',
                'Analyzed and researched complex problems against the AlixaRx desktop application; supported IIS server administration. Assisted and led — where appropriate — root cause analysis for chronic and complex technical issues.',
                'Documented concerns, problems, and resolutions with full traceability; maintained timely, accurate, and compliant administrative responsibilities. Provided feedback on support issues and trends to development and field service teams.',
                'Supported new product implementations, disaster recovery efforts, and remote monitoring alert protocols. Contributed to the development and improvement of field service and support operations, and provided after-hours technical support to meet customer demand.'
            ]
        },
        {
            company: 'Tom Thumb',
            role:    'Pharmacy Technician (PTCB-certified)',
            dates:   'Mar 2011 – Dec 2017',
            location: 'Plano, TX',
            summary: 'Nationally certified by the PTCB. Built the operational discipline and patient-safety mindset that informs my QA work today.',
            bullets: [
                'Verified dosages and measured medications; maintained patient confidentiality (early HIPAA habits).',
                'QA checks on dispensing, data entry, and pharmacy procedures.',
                'Completed prescription insurance claims and maintained physician records.'
            ]
        }
    ],

    skills: [
        {
            category: 'QA & Testing',
            items: ['Manual / Regression / Validation / Acceptance', 'Test plan & test case authoring', 'Defect lifecycle management', 'ADO Test Plans', 'TestComplete (SmartBear)', 'Microsoft Test Manager', 'Test data management', 'HIPAA awareness']
        },
        {
            category: 'AI & Agentic Automation',
            items: ['Claude Code CLI', 'Playwright MCP', 'Azure DevOps MCP', 'Multi-agent orchestration', 'App Insights triage', 'GPT / Gemini / Claude', 'Anthropic product stack']
        },
        {
            category: 'Programming & Languages',
            items: ['Playwright (JavaScript)', 'JavaScript', 'Sencha ExtJS', 'Python', 'C++', 'SQL (T-SQL / SSMS)', 'REST APIs', 'React (QA-level)', '.NET / C# (QA-level)']
        },
        {
            category: 'Tools & Platforms',
            items: [
                'VS Code + Claude Code CLI',
                'Visual Studio Pro',
                'PyCharm',
                'Sencha Cmd',
                'Azure DevOps (Boards / Test Plans / Repos / Pipelines)',
                'Azure Portal (App Insights / Cloud Services)',
                'SharePoint',
                'Microsoft 365 (Word / Excel / PowerPoint / Outlook / Teams)',
                'SSMS',
                'Freshdesk',
                'Atera / ASTEA',
                'IIS Server',
                'Citrix',
                'FrameworkLTC'
            ]
        },
        {
            category: 'Infrastructure & Hardware',
            items: ['Windows 11', 'Custom PC building', 'GPU / CPU benchmarking', 'Networking fundamentals', 'Virtualization', 'OS administration', 'Mobile device management']
        }
    ],

    projects: [
        {
            name:    'Agentic QA Framework',
            context: 'Projectmates by Systemates <span class="rs-dot">•</span> 2024 – Present',
            blurb:   'A multi-agent QA system built on Claude Code CLI. Autonomously discovers modules, generates ADO test cases, authors Playwright E2E suites, triages App Insights exceptions, and produces UI mockups on a live SaaS product. Teammates use it as part of their daily workflow.'
        },
        {
            name:    'Daily QA Triage Briefing',
            context: 'Personal automation <span class="rs-dot">•</span> 2025',
            blurb:   'An agentic routine that aggregates Azure DevOps work items, Outlook email, and Microsoft Teams messages into a prioritized markdown briefing each morning. Replaces a fragmented cross-platform triage with one focused read.'
        },
        {
            name:    'NoblizzRangeFade — WoW Addon (Published)',
            context: 'CurseForge <span class="rs-dot">•</span> Personal',
            blurb:   'A World of Warcraft addon providing range-fade visual effects. Published and maintained on CurseForge. Blends a hobby I’ve carried since 2006 with software craftsmanship.',
            url:     'https://www.curseforge.com/wow/addons/noblizzrangefade'
        },
        {
            name:    'SimulationCraft Local Port',
            context: 'Personal <span class="rs-dot">•</span> C++',
            blurb:   'Running a local port of SimulationCraft — the event-driven C++ multi-player simulator that models WoW combat — to explore performance mechanics and combat math at the source level.'
        }
    ],

    education: [
        {
            school: 'Dallas College (Eastfield)',
            degree: 'A.S. — Pharmacy / Pre-Pharmacy',
            dates:  '2015',
            note:   'Grounded my early QA mindset: clinical accuracy, traceability, and patient safety.'
        },
        {
            school: 'Non-degree coursework',
            degree: 'C++ and Python programming',
            dates:  '',
            note:   'Formal coursework plus a personal C++ → Python port project to compare language behavior at the data-structure level.'
        }
    ],

    certifications: [
        { name: 'Claude Code 101',                                      issuer: 'Anthropic',                             year: '2026', url: 'resources/documents/cert-anthropic-claude-coded-101.jpg' },
        { name: 'Claude 101',                                          issuer: 'Anthropic',                             year: '2026', url: 'resources/documents/anthropic-claude-101.pdf' },
        { name: 'ITIL v4 Foundation',                                  issuer: 'AXELOS Global Best Practice',           year: 'Mar 2022' },
        { name: 'CompTIA Project+',                                    issuer: 'CompTIA',                               year: 'Dec 2021' },
        { name: 'CompTIA IT Operations Specialist (CIOS Stackable)',   issuer: 'CompTIA',                               year: 'May 2020' },
        { name: 'CompTIA Network+',                                    issuer: 'CompTIA',                               year: 'May 2020' },
        { name: 'CompTIA A+',                                          issuer: 'CompTIA',                               year: 'Feb 2020' },
        { name: 'MTA — Networking Fundamentals',                       issuer: 'Microsoft (via Certiport / Pearson VUE)', year: 'Oct 2019' },
        { name: 'Registered Pharmacy Technician',                      issuer: 'Texas State Board of Pharmacy',         year: 'Mar 2018' }
    ],

    goals: "Toward Quality Engineering, AI Quality Engineering, and AI-augmented test architecture — the emerging category of practitioners who design the AI systems that do the testing, not just use AI tools for testing. I want a role with more architectural ownership over how teams build trust in software with AI in the loop.",

    languages: [
        { name: 'English', level: 'Primary' },
        { name: 'Spanish', level: 'Conversational' }
    ],

    hobbies: [
        { icon: 'fa-music',      label: 'Drums (primary instrument), guitar, and piano — humbly. Music shapes my approach to rhythm and pattern in technical work.' },
        { icon: 'fa-gamepad',    label: 'World of Warcraft since 2006 (published addon on CurseForge). Also Skyrim, Zelda, and Pokémon.' },
        { icon: 'fa-desktop',    label: 'Custom PC building — my own rig plus machines for friends, family, and coworkers. Follow GPU/CPU benchmarks closely.' },
        { icon: 'fa-film',       label: 'Christopher Nolan filmography, Marvel shows, anime. Christopher Nolan is the consistent favorite.' },
        { icon: 'fa-heart',      label: 'Family time. Energized by continuous learning.' }
    ],

    contact: {
        email:    'oayala14@gmail.com',
        linkedin: 'https://www.linkedin.com/in/oayala14',
        github:   'https://github.com/sikaros'
    }
});
