
export function addEndingSlash(url) {
    if(url == "") return url;
    if(url.endsWith("/")) return url;
    return url + "/";
}

/**
 * Transform http://example.com/page in page
 * @param url 
 */
export function removeBaseURL(url) {
    if(!url.startsWith("http://")) return url;
    url = url.substring(7);
    let murl = url.substring(url.indexOf("/") + 1);
    return murl;
}

export function aspectShortLabel(txt) {
    if (txt == "biological_process") {
        return "P";
    } else if (txt == "molecular_activity" || txt == "molecular_function") {
        return "F";
    } else if (txt == "cellular_component") {
        return "C";
    }
    return "U";
}

export function bioLinkToTable(slimmer_response) {
    let table = {
        newTab: true,
        header: [
            {
                label: "Aspect",
                id: "aspect",
                hide: false
            },
            {
                label: "Gene",
                id: "gene",
                baseURL: "http://amigo.geneontology.org/amigo/gene_product/"
            },
            {
                label: "Term",
                id: "term",
                baseURL: "http://amigo.geneontology.org/amigo/term/"
            },
            {
                label: "Evidence",
                id: "evidence",
                baseURL: "http://www.ontobee.org/ontology/ECO?iri=http://purl.obolibrary.org/obo/"
            },
            {
                label: "With/From",
                id: "with_from"
            },
            {
                label: "Reference",
                id: "reference"
            }
        ],

        rows: []
    };

    for (let subject of slimmer_response) {
        for (let assoc of subject.assocs) {
            table.rows.push({
                cells: [
                    {
                        headerId: "aspect",
                        values: [
                            {
                                label: aspectShortLabel(assoc.object.category[0])
                            }
                        ]
                    },

                    {
                        headerId: "gene",
                        values: [
                            {
                                label: assoc.subject.label,
                                url: assoc.subject.id
                            }
                        ]
                    },

                    {
                        headerId: "term",
                        values: [
                            {
                                label: assoc.object.label,
                                url: assoc.object.id
                            }
                        ]
                    },

                    {
                        headerId: "evidence",
                        values: [
                            {
                                label: assoc.evidence_type,
                                url: assoc.evidence.replace(":", "_")
                            }
                        ]
                    },

                    {
                        headerId: "with_from",
                        values: assoc.evidence_with ? assoc.evidence_with.map(elt => {
                            return {
                                label: elt
                            }
                        }) : [{ label: "" }]
                    },

                    {
                        headerId: "reference",
                        values: assoc.reference.map(elt => {
                            return {
                                label: elt
                            }
                        })
                    }

                ]
            })
        }
    }
    return table;
}
