import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

//This is useful cause of the "fakeLocale" we use
export function getRealLocale(locale) {
    const FAKE_LOCALE = 'my';
    const DEFAULT_LOCALE = 'el';
    return locale === FAKE_LOCALE ? DEFAULT_LOCALE : locale;
}

export function isCurrentPath(path) {
    const router = useRouter();
    return path === `/${router.locale}${router.asPath}`;
}

export function formatPrice(price) {
    return new Intl.NumberFormat('el-GR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

export function convertRemToPixels(rem) {
    //gets styles from the whole html
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function formatFacets(facets) {
    if (!facets) return;

    let transliteratedNames = [];

    return facets.map((i, idx) => {
        return {
            ...i,
            facetSearchOrder: idx,
            filters: i.filters.map((j, jIdx) => {
                let transliteratedName = generateUniqueTransliteratedFilterName(
                    j.filter_transliterated,
                    transliteratedNames
                );
                transliteratedNames.push(transliteratedName);

                return {
                    ...j,
                    facet: i.facet,
                    filter_transliterated: transliteratedName,
                    filterSearchOrder: idx * 10 + jIdx,
                    uuid: `${i.facet}_${transliteratedName}`
                };
            })
        };
    });
}

function generateUniqueTransliteratedFilterName(filterName, transliteratedNames) {
    const occurrences = transliteratedNames.filter((i) => i === filterName).length;
    let name = filterName;

    for (let i = 0; i < occurrences; i++) {
        name = name + '_';
    }

    return name;
}

export function createFiltersParamsUrl(selectedFilters) {
    let selectedFiltersPath = '';

    let filtersArr = [];

    for (let i in selectedFilters) {
        if (selectedFilters[i] && selectedFilters[i].length > 0) {
            filtersArr = filtersArr.concat(selectedFilters[i]);
        }
    }

    const valuesArr = filtersArr
        .sort((a, b) => a.filterSearchOrder - b.filterSearchOrder)
        .map((f) => {
            return f.filter_transliterated;
        });
    selectedFiltersPath += `${valuesArr.join('-')}-`;

    return selectedFiltersPath.slice(0, selectedFiltersPath.length - 1);
}

export function createFiltersFromQuery(query, facets) {
    if (!query || !facets || facets.length === 0) {
        return;
    }
    let selectedFilters = {};

    const filtersArr = query.split('-').map((i) => i.slice(0, i.length));

    facets.map((i) => {
        for (let f = 0; f < i.filters.length; f++) {
            for (let a = 0; a < filtersArr.length; a++) {
                if (filtersArr[a] === i.filters[f].filter_transliterated) {
                    if (!selectedFilters[i.facet]) {
                        selectedFilters[i.facet] = [i.filters[f]];
                    } else {
                        selectedFilters[i.facet].push(i.filters[f]);
                    }
                }
            }
        }
        return i;
    });

    return selectedFilters;
}

export function getFormattedFilters(filters) {
    let array = [];

    for (let i in filters) {
        array = array.concat(filters[i]);
    }

    return array;
}

/**
 * Gets the error message from a failed API call
 * @param error
 * @returns {*}
 */
export function getErrorMessage(error) {
    let errorMsg = 'Some error happened. Please try again later.';

    if (typeof error === 'string') {
        errorMsg = error;
    } else if (error && error.response && error.response.data && error.response.data.error_description) {
        errorMsg = error.response.data.error_description;
    } else if (error && error.response && error.response.data && error.response.data.message) {
        errorMsg = error.response.data.message;
    } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
    ) {
        errorMsg = '';
        error.response.data.errors.map((i) => {
            errorMsg += `${i.field}: ${i.message} \n\n`;
            return i;
        });
        //errorMsg = error.response.data.errors[0].message;
    } else if (error && error.response && error.response.data && error.response.data.error) {
        if (error && error.response && error.response.data && typeof error.response.data.error === 'string') {
            errorMsg = error.response.data.error;
        } else {
            errorMsg =
                error && error.response && error.response.data && error.response.data.error
                    ? error.response.data.error.message
                    : 'Some error happened. Please try again later.';
        }
    } else if (error && error.message) {
        errorMsg = error.message;
    } else {
        errorMsg =
            error && error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'Some error happened. Please try again later.';
    }
    return errorMsg;
}

export function handleFormError(err) {
    toast.error(getErrorMessage(err));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
