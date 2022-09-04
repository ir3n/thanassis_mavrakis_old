import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

import FormInput from '../Forms/FormInput';

export default function AddressInput({ register, errors, setValue }) {
    const { t } = useTranslation('checkout');

    const handleAccentuation = (address) => {
        return address
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase();
    };

    return (
        <>
            <Box>
                <Box
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent={'space-between'}
                    mb={'18px'}
                >
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            id="address.given_name"
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('given_name')}
                            inputProps={{
                                ...register('address.given_name', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.given_name', handleAccentuation(e.target.value));
                                }
                            }}
                            error={errors?.address?.given_name?.message}
                        />
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('family_name')}
                            id="address.family_name"
                            inputProps={{
                                ...register('address.family_name', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.family_name', handleAccentuation(e.target.value));
                                }
                            }}
                            error={errors?.address?.family_name?.message}
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent={'space-between'}
                    mb={'18px'}
                >
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('address')}
                            id="address.address_line1"
                            inputProps={{
                                ...register('address.address_line1', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.address_line1', handleAccentuation(e.target.value));
                                }
                            }}
                            error={errors?.address?.address_line1?.message}
                        />
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('locality')}
                            inputProps={{
                                ...register('address.locality', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.locality', handleAccentuation(e.target.value));
                                }
                            }}
                            id="address.locality"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent={'space-between'}
                    mb={'18px'}
                >
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} placeholder={t('state')} />
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('postal_code')}
                            inputProps={{
                                ...register('address.postal_code', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.postal_code', handleAccentuation(e.target.value));
                                }
                            }}
                            id="address.postal_code"
                        />
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'} d={'none'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('administrative_area')}
                            value={'NCW'}
                            inputProps={{
                                ...register('address.administrative_area', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.administrative_area', handleAccentuation(e.target.value));
                                }
                            }}
                            id="address.administrative_area"
                        />
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'} d={'none'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('organization')}
                            value={'RCT'}
                            inputProps={{
                                ...register('address.organization', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.organization', handleAccentuation(e.target.value));
                                }
                            }}
                            id="address.organization"
                        />
                    </Box>
                </Box>
                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('country')}
                            value={'GR'}
                            inputProps={{
                                ...register('address.country_code', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.country_code', handleAccentuation(e.target.value));
                                }
                            }}
                            id="address.country_code"
                        />
                        {/* <Select
                            placeholder="Χώρα"
                            inputProps={{
                                ...register('address.country_code', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('address.country_code', 'GR');
                                }
                            }}
                        >
                            <option value="GR">Ελλάδα</option>
                            <option value="Ιταλία">Ιταλία</option>
                            <option value="Γερμανία">Γερμανία</option>
                        </Select> */}
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('phone')}
                            id="telephone"
                            inputProps={{
                                ...register('telephone', { required: t('requiredField') }),
                                onChange: (e) => {
                                    setValue('telephone', handleAccentuation(e.target.value));
                                }
                            }}
                            error={errors?.phone?.message}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
