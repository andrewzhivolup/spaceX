import React from 'react';
import cls from './MissionsPage.module.scss';
import {SortButton} from '../../../entities/SortButton';
import {Mission} from '../../../entities/Mission';

const MissionsPage = () => {

    const missions = [
        {
            'flight_number': 19,
            'mission_name': 'CRS-5',
            'mission_id': [
                'EE86F74'
            ],
            'launch_year': '2015',
            'launch_date_unix': 1420883220,
            'launch_date_utc': '2015-01-10T09:47:00.000Z',
            'launch_date_local': '2015-01-10T05:47:00-04:00',
            'is_tentative': false,
            'tentative_max_precision': 'hour',
            'tbd': false,
            'launch_window': 0,
            'rocket': {
                'rocket_id': 'falcon9',
                'rocket_name': 'Falcon 9',
                'rocket_type': 'v1.1',
                'first_stage': {
                    'cores': [
                        {
                            'core_serial': 'B1012',
                            'flight': 1,
                            'block': 1,
                            'gridfins': true,
                            'legs': true,
                            'reused': false,
                            'land_success': false,
                            'landing_intent': true,
                            'landing_type': 'ASDS',
                            'landing_vehicle': 'JRTI-1'
                        }
                    ]
                },
                'second_stage': {
                    'block': 1,
                    'payloads': [
                        {
                            'payload_id': 'CRS-5',
                            'norad_id': [
                                40370
                            ],
                            'cap_serial': 'C107',
                            'reused': false,
                            'customers': [
                                'NASA (CRS)'
                            ],
                            'nationality': 'United States',
                            'manufacturer': 'SpaceX',
                            'payload_type': 'Dragon 1.1',
                            'payload_mass_kg': 2395,
                            'payload_mass_lbs': 5280,
                            'orbit': 'ISS',
                            'orbit_params': {
                                'reference_system': 'geocentric',
                                'regime': 'low-earth',
                                'longitude': null,
                                'semi_major_axis_km': 6656.902,
                                'eccentricity': 0.0109236,
                                'periapsis_km': 206.049,
                                'apoapsis_km': 351.484,
                                'inclination_deg': 51.6369,
                                'period_min': 90.088,
                                'lifespan_years': null,
                                'epoch': '2015-01-10T09:44:04.000Z',
                                'mean_motion': 15.98433248,
                                'raan': 152.0013,
                                'arg_of_pericenter': 46.9449,
                                'mean_anomaly': 314.0689
                            },
                            'mass_returned_kg': 1633,
                            'mass_returned_lbs': 3600,
                            'flight_time_sec': 2764800,
                            'cargo_manifest': 'https://www.nasa.gov/sites/default/files/files/SpaceX_CRS-5_factsheet.pdf'
                        }
                    ]
                },
                'fairings': null
            },
            'ships': [
                'ELSBETH3',
                'GOQUEST',
                'GOSEARCHER',
                'JRTI-1',
                'NRCQUEST'
            ],
            'telemetry': {
                'flight_club': null
            },
            'launch_site': {
                'site_id': 'ccafs_slc_40',
                'site_name': 'CCAFS SLC 40',
                'site_name_long': 'Cape Canaveral Air Force Station Space Launch Complex 40'
            },
            'launch_success': true,
            'links': {
                'mission_patch': 'https://images2.imgbox.com/fe/5a/WyQS4MXa_o.png',
                'mission_patch_small': 'https://images2.imgbox.com/25/b6/RhNppyL3_o.png',
                'reddit_campaign': null,
                'reddit_launch': 'http://www.reddit.com/r/spacex/comments/2rrdha',
                'reddit_recovery': null,
                'reddit_media': null,
                'presskit': 'http://www.spacex.com/sites/spacex/files/spacex_nasa_crs-5_presskit.pdf',
                'article_link': 'https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/',
                'wikipedia': 'https://en.wikipedia.org/wiki/SpaceX_CRS-5',
                'video_link': 'https://www.youtube.com/watch?v=p7x-SumbynI',
                'youtube_id': 'p7x-SumbynI',
                'flickr_images': [
                    'https://farm9.staticflickr.com/8666/16511391418_bb5cdbbd71_o.jpg',
                    'https://farm9.staticflickr.com/8612/16848173281_035bdc6009_o.jpg',
                    'https://farm9.staticflickr.com/8571/16699496805_bf39747618_o.jpg',
                    'https://farm9.staticflickr.com/8650/16699496705_187e4e53fd_o.jpg',
                    'https://farm9.staticflickr.com/8663/16077174554_370937efbe_o.jpg',
                    'https://farm9.staticflickr.com/8638/16512101410_83763eb9ea_o.jpg',
                    'https://farm9.staticflickr.com/8653/16077173984_17885d4bea_o.jpg',
                    'https://farm8.staticflickr.com/7635/16848159582_40c0f9d25f_o.jpg'
                ]
            },
            'details': 'Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket\'s descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.',
            'upcoming': false,
            'static_fire_date_utc': '2018-06-23T21:30:00.000Z',
            'static_fire_date_unix': 1529789400,
            'timeline': {
                'webcast_liftoff': 959,
                'go_for_prop_loading': -2280,
                'rp1_loading': -2100,
                'stage1_lox_loading': -2100,
                'stage2_lox_loading': -960,
                'engine_chill': -420,
                'prelaunch_checks': -60,
                'propellant_pressurization': -60,
                'go_for_launch': -45,
                'ignition': -3,
                'liftoff': 0,
                'maxq': 60,
                'meco': 180,
                'stage_sep': 180,
                'second_stage_ignition': 180,
                'seco-1': 540,
                'dragon_separation': 600,
                'dragon_solar_deploy': 720,
                'dragon_bay_door_deploy': 8400
            },
            'crew': null
        },
        {
            'flight_number': 20,
            'mission_name': 'DSCOVR',
            'mission_id': [],
            'launch_year': '2015',
            'launch_date_unix': 1423695780,
            'launch_date_utc': '2015-02-11T23:03:00.000Z',
            'launch_date_local': '2015-02-11T19:03:00-04:00',
            'is_tentative': false,
            'tentative_max_precision': 'hour',
            'tbd': false,
            'launch_window': 0,
            'rocket': {
                'rocket_id': 'falcon9',
                'rocket_name': 'Falcon 9',
                'rocket_type': 'v1.1',
                'first_stage': {
                    'cores': [
                        {
                            'core_serial': 'B1013',
                            'flight': 1,
                            'block': 1,
                            'gridfins': true,
                            'legs': true,
                            'reused': false,
                            'land_success': true,
                            'landing_intent': true,
                            'landing_type': 'Ocean',
                            'landing_vehicle': null
                        }
                    ]
                },
                'second_stage': {
                    'block': 1,
                    'payloads': [
                        {
                            'payload_id': 'DSCOVR',
                            'norad_id': [
                                40390
                            ],
                            'reused': false,
                            'customers': [
                                'NASA',
                                'NOAA',
                                'USAF'
                            ],
                            'nationality': 'United States',
                            'manufacturer': 'Sierra Nevada',
                            'payload_type': 'Satellite',
                            'payload_mass_kg': 570,
                            'payload_mass_lbs': 1260,
                            'orbit': 'ES-L1',
                            'orbit_params': {
                                'reference_system': 'heliocentric',
                                'regime': 'L1-point',
                                'longitude': null,
                                'semi_major_axis_km': null,
                                'eccentricity': null,
                                'periapsis_km': null,
                                'apoapsis_km': null,
                                'inclination_deg': null,
                                'period_min': null,
                                'lifespan_years': 5,
                                'epoch': null,
                                'mean_motion': null,
                                'raan': null,
                                'arg_of_pericenter': null,
                                'mean_anomaly': null
                            }
                        }
                    ]
                },
                'fairings': {
                    'reused': false,
                    'recovery_attempt': false,
                    'recovered': false,
                    'ship': null
                }
            },
            'ships': [
                'ELSBETH3',
                'GOQUEST',
                'GOSEARCHER'
            ],
            'telemetry': {
                'flight_club': null
            },
            'launch_site': {
                'site_id': 'ccafs_slc_40',
                'site_name': 'CCAFS SLC 40',
                'site_name_long': 'Cape Canaveral Air Force Station Space Launch Complex 40'
            },
            'launch_success': true,
            'links': {
                'mission_patch': 'https://images2.imgbox.com/ec/a0/kTPQRyzt_o.png',
                'mission_patch_small': 'https://images2.imgbox.com/63/c5/0OIpD59z_o.png',
                'reddit_campaign': null,
                'reddit_launch': 'http://www.reddit.com/r/spacex/comments/2vjm9e',
                'reddit_recovery': null,
                'reddit_media': null,
                'presskit': 'http://www.spacex.com/press/2015/02/11/dscovr-launch-update',
                'article_link': 'https://spaceflightnow.com/2015/02/12/space-weather-observatory-blasts-off-after-17-year-wait/',
                'wikipedia': 'https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory',
                'video_link': 'https://www.youtube.com/watch?v=OvHJSIKP0Hg',
                'youtube_id': 'OvHJSIKP0Hg',
                'flickr_images': [
                    'https://farm9.staticflickr.com/8619/16511407538_9a25c5d8c6_o.jpg',
                    'https://farm9.staticflickr.com/8665/16697946612_1284e952b0_o.jpg',
                    'https://farm9.staticflickr.com/8570/16698990475_16524a93de_o.jpg',
                    'https://farm9.staticflickr.com/8681/16512864259_e849e496b1_o.jpg',
                    'https://farm9.staticflickr.com/8637/16079045013_1f0fab9b54_o.jpg',
                    'https://farm9.staticflickr.com/8601/16512864369_2bb896c344_o.jpg',
                    'https://farm9.staticflickr.com/8646/16697693861_a038331e0a_o.jpg',
                    'https://farm9.staticflickr.com/8680/16511407248_093635a243_o.jpg',
                    'https://farm9.staticflickr.com/8654/16511594820_451f194d53_o.jpg',
                    'https://farm9.staticflickr.com/8603/16673054016_472fb42a20_o.jpg'
                ]
            },
            'details': 'First launch under USAF\'s OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.',
            'upcoming': false,
            'static_fire_date_utc': '2015-01-31T00:00:00.000Z',
            'static_fire_date_unix': 1422662400,
            'timeline': {
                'webcast_launch': 960
            },
            'crew': null
        }];

    function formatDateToDDMMYYYY(dateString) {
        const dateObj = new Date(dateString);
        const day = dateObj.getUTCDate().toString().padStart(2, '0');
        const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getUTCFullYear().toString();
        return `${day}.${month}.${year}`;
    }

    const modifyDataFromBase = (data) => {
        return data.map(item => ({
            missionName: item.mission_name
            , launchDate: formatDateToDDMMYYYY(item.launch_date_utc)
            , launchInformation: item.details
            , rocketPictureUrl: item.links.flickr_images[0]
        })
        );
    };

    const modifyMissions = modifyDataFromBase(missions);

    return (
        <div className={cls.MissionsPage}>
            <SortButton/>
            {modifyMissions.map(mission => <Mission key={mission.missionName} data={mission}/>)}
        </div>
    );
};

export default MissionsPage;