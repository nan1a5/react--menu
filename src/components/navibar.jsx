import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelected } from '../redux/stores/setting'
import {Link} from 'react-router-dom'
import '../style/components.css'

const NaviBar = function(){

    const selected = useSelector((state) => state.setting.selected)
    const dispatch = useDispatch()

    const list = [
        {
            name: '店长推荐',
            classname: 'specials',
            to: '/login/signin',
            path: 'M511.953455-0.046545c-282.763636 0-512 229.236364-512 512.046545 0 282.763636 229.236364 512 512 512s512-229.236364 512-512c0-282.810182-229.236364-512.046545-512-512.046545z m0 967.121454A454.981818 454.981818 0 0 1 56.832 512a454.981818 454.981818 0 0 1 455.121455-455.121455A454.981818 454.981818 0 0 1 967.074909 512a454.981818 454.981818 0 0 1-455.121454 455.074909z m246.690909-626.082909a165.376 165.376 0 0 0-117.108364-48.034909c-41.565091 0-81.454545 15.36-112.267636 43.147636l-18.944 16.989091-18.944-16.989091a167.703273 167.703273 0 0 0-112.314182-43.147636c-44.218182 0-85.783273 17.128727-117.108364 48.034909A163.374545 163.374545 0 0 0 213.178182 457.867636c0 44.218182 17.314909 85.643636 48.872727 116.875637l224.674909 217.460363a33.373091 33.373091 0 0 0 47.010909 0.139637l224.907637-217.6a163.374545 163.374545 0 0 0 48.779636-116.875637 162.955636 162.955636 0 0 0-48.779636-116.875636z m-462.568728 128.977455h-0.232727a12.8 12.8 0 0 1-12.660364-13.125819 99.421091 99.421091 0 0 1 28.439273-67.537454c21.690182-21.690182 50.967273-26.996364 65.536-25.320727a12.939636 12.939636 0 0 1-2.978909 25.646545c-7.447273-0.884364-28.765091 2.466909-44.218182 17.873455a73.169455 73.169455 0 0 0-20.898909 49.710545 13.079273 13.079273 0 0 1-12.986182 12.753455z'
        },{
            name: '新款',
            classname: 'new',
            to: '/login/signin',
            path: 'M987.04 533.208c-15.951-18.618-12.415-26.62 0.947-42.956 69.21-84.716 31.696-201.788-74.55-229.604-26.705-6.985-38.047-14.813-28.855-37.193C887.36 116.06 783.764 43.795 682.875 81.34c-23.697 8.815-32.08 6.967-46.299-13.836-61.223-89.51-188.549-89.59-249.31 0.046-14.453 21.302-23.543 22.162-46.413 13.935-103.4-37.228-208.124 36.36-201.084 142.258 1.774 26.523-6.729 30.735-29.426 36.824C4.276 289.07-34.412 407.945 35.925 490.36c15.47 18.123 13.656 25.996-0.449 43.293-70.264 86.13-30.09 202.613 79.444 230.943 20.223 5.23 26.623 9.243 25.28 31.722-6.748 112.214 95.964 184.444 205.302 144.714 20.503-7.474 27.514-5.58 39.599 12.37 63.32 94.021 190.484 93.64 253.87-0.987 12.649-18.874 19.977-18.476 39.684-11.11 108.264 40.473 214.39-35.934 204.702-147.362-1.786-20.577 3.608-23.863 22.703-28.612 112.563-27.945 154.277-146.564 80.98-232.123zM214.635 718.206l-58.778-168.943c-5.088-14.651 0.203-24.952 15.841-30.861 8.91-1.167 16.832 0.137 23.728 3.87l145.283 92.081 1.251-0.417-39.036-112.224c-5.094-14.652 0.198-24.953 15.842-30.879 15.358-4.114 25.992 1.052 31.941 15.43l58.743 168.945c4.003 14.153-1.552 23.656-16.633 28.532-8.383 2.727-16.022 2.202-22.93-1.595l-144.888-90.879-1.251 0.4L262.37 702.74c3.984 14.16-1.557 23.657-16.634 28.557-15.906 5.165-26.288 0.798-31.1-13.09zM436.72 645.1l-56.748-163.14c-5.638-16.216-0.63-27.26 15.033-33.188l80.433-26.002c13.675-3.588 23.494 0.56 29.48 12.35 3.127 14.432-2 23.82-15.393 28.157l-56.562 18.286 14.895 42.813 52.794-17.054c14.799-3.062 25.146 1.305 31.133 13.102 2.858 13.662-2.662 23.165-16.634 28.533l-52.794 17.077 15.694 45.113 59.09-19.083c14.518-3.824 24.338 0.319 29.479 12.34 3.127 14.426-2.002 23.814-15.393 28.152l-82.95 26.829c-15.391 4.132-25.906-0.652-31.557-14.285z m178.89-56.54l-97.827-148.59c-2.763-2.52-4.381-5.848-4.878-10.025-3.194-11.831 2.068-20.803 15.788-26.955 13.392-4.321 24.753 0.156 34.047 13.449l69.852 116.436 1.276-0.415-3.609-143.006c0.431-12.131 6.813-20.647 19.114-25.476 12.001-3.027 22.386 0.063 31.169 9.214l86.55 116.21 1.277-0.409-15.823-133.895c-3.146-14.442 2.696-24.483 17.507-30.127 13.92-2.773 23.745 1.322 29.461 12.34 1.361 3.887 2.115 7.504 2.367 10.838l16.135 175.004c-1.042 15.783-9.107 26.13-24.188 30.97-16.785 5.437-29.93 2.41-39.535-9.081l-77.538-102.363 2.133 126.764c-1.306 15.004-9.49 24.935-24.59 29.811-17.62 5.66-30.532 2.118-38.688-10.694z m0 0'
        },{
            name: '热卖',
            classname: 'hot',
            to: '/login/signin',
            path: 'M408.4 80.1c85.8-21.5 178-16.9 261 13.8 58.6 21.5 112.5 55.7 157 99.5 38.4 37.7 69.9 82.4 92.3 131.3 22.2 48.2 35.4 100.4 39 153.2 2.9 43.1-0.2 86.7-9.8 128.9-7.5 33.1-18.8 65.3-33.7 95.8-26.4 54.2-64.1 102.9-109.9 142.1-48.3 41.5-105.6 72.4-166.9 89.7-36 10.3-73.3 15.6-110.7 16.7h-20.6c-41.5-1.2-83-7.8-122.6-20.3-50.1-15.8-97.3-40.6-138.7-72.9-49.9-38.8-91.3-88.5-120.5-144.5-35.6-67.8-52.7-145.1-49.6-221.6C77.1 426.1 94.5 361 125.2 303c29.6-56.3 71.6-106 122-144.7 47.7-36.7 102.9-63.6 161.2-78.2m-45.1 191.8c-6 1.1-11.6 4.7-15.1 9.8-5.3 7.7-5.3 18.6 0 26.3 3.4 5.1 9 8.7 15.1 9.8 17.1 3.5 31.5 17.2 36 34.1 3.1 11.3 2 23.9-3.6 34.2-4.9 7.1-9.8 14.3-15.7 20.6-34.1 32-59 74.2-68.1 120.3-3.9 18.8-4.7 38.1-4 57.2-0.4 37.6 7.8 75.8 27.3 108.3 16.9 28.6 42.5 51.6 71.8 67.2 4.3 2.5 9 4.6 14 4.4 7.7 0.3 15.3-3.7 19.5-10.1 14.4-21.3 26.3-44.2 35.5-68.1 1-2.5 1.7-5.2 3.1-7.6 9.1 28.8 13.9 58.8 14.1 89-0.1 11.4 9.4 21.7 20.7 22.6 26.1 2.1 52.5 1.2 78.1-4.5 30.3-6.6 59.1-19.4 84.5-37.3 38.9-27.3 69.2-66.5 85.6-111.1 12.6-33.9 17-70.7 13.3-106.6-3.6-35.1-15.3-69.3-33.8-99.2-15.1-24.4-34.6-46.1-57.4-63.4-7-5.3-17-6-24.7-1.8-7.2 3.7-12.2 11.5-12.4 19.7-0.3 4.9 1.5 9.5 2.4 14.2 8.2 38.8 2.7 80.6-16.4 115.5-2.2-49.9-19.3-98.9-48.7-139.3-20.4-28.2-46.6-52.3-76.5-70.2-34.6-20.9-74.2-33.3-114.5-36.1-5.5-0.3-11-0.9-16.5-0.4-4.6 0.4-9 1.6-13.6 2.5z',
            path2: 'M439.5 325.7c30.9 9.6 59.3 26.9 82.6 49.4 25.1 24.2 44.1 54.7 54.6 87.9 11 34.8 13.2 72.6 4.9 108.2-4.7 5.8-7 13.3-7 20.8 0.1 7.3 3.9 14.4 9.9 18.5 6.4 4.5 15.1 5.4 22.3 2.4 4.1-1.6 7.2-4.8 10.7-7.4 24.2-19.2 44.2-43.7 58.3-71.2 13.2-25.6 21.1-53.9 23.3-82.6 20.6 31.1 31.3 68.4 30.7 105.7-0.3 31.1-8.5 62.1-23.7 89.2-23.8 43.1-64.9 76.2-112.2 89.9-17.9 5.1-36.6 8.1-55.3 7.4-3.6-52.4-19.6-104-46.4-149.2-4.2-7.5-12.8-12.1-21.4-11.5-8.8 0.2-17 6.1-20.3 14.2-1.8 4-1.9 8.4-2.6 12.6-5.5 34.7-17.2 68.5-34.7 98.9-13.5-9.5-25.5-21.2-34.7-35-9.6-14.3-16.1-30.6-19.9-47.3-3.5-14.8-4.4-29.9-4.3-45.1-0.9-18.9 0.6-38 5.7-56.3 8.6-31.6 26.7-60.3 50.2-83 6.2-5.6 11.4-12.4 16.4-19.1 5.1-7.1 10.6-14.2 13.8-22.5 10.1-23.6 9.5-51.4-0.9-74.9z'
        },{
            name: '套餐',
            classname: 'bundle',
            to: '/login/signin',
            path: 'M983.786625 881.468796 856.352257 1009.27667c-8.637728 8.665357-20.572548 14.057157-33.781384 14.057157-13.183254 0-25.140587-5.393847-33.781384-14.057157l-63.71923-63.915705c-8.637728-8.664334-13.980409-20.648272-13.980409-33.879622 0-26.491351 21.397333-47.938825 47.76384-47.938825 13.20679 0 25.140587 5.342682 33.80492 14.031575l29.910217 30.010501 93.630471-93.927229c8.635681-8.688893 20.596084-14.031575 33.779338-14.031575 26.39209 0 47.787376 21.447475 47.787376 47.937802C997.769081 860.796988 992.424352 872.780927 983.786625 881.468796zM821.945633 840.421938c-16.777105-15.230889-38.621623-24.817222-63.09092-24.817222-52.758598 0-95.551216 42.917462-95.551216 95.874581 0 26.514887 10.886955 50.285267 28.264741 67.512626l-0.276293 0.274246 43.918255 44.067658L74.020342 1023.333828c-26.391067 0-47.787376-21.471011-47.787376-47.938825L26.232966 144.478556c0-26.492374 21.396309-47.938825 47.787376-47.938825l79.622432 0 0 47.938825c0 52.931536 42.793642 95.873558 95.574752 95.873558 52.756551 0 95.551216-42.944068 95.551216-95.873558L344.768743 96.540753l47.787376 0 0 47.938825c0 52.931536 42.769083 95.873558 95.550193 95.873558 52.782134 0 95.574752-42.944068 95.574752-95.873558L583.681064 96.540753l47.761794 0 0 47.938825c0 52.931536 42.794665 95.873558 95.576799 95.873558 52.756551 0 95.54917-42.944068 95.54917-95.873558L822.568826 96.540753l79.648015 0c26.390044 0 47.761794 21.446451 47.761794 47.938825l0 607.209432c-26.390044 0-50.259684 10.735505-67.559699 28.065196L821.945633 840.421938zM153.642774 823.593667c0 22.071691 17.827017 39.948851 39.822984 39.948851l302.606992 0c21.995967 0 39.824007-17.877159 39.824007-39.948851l0 0 0 0 0 0 0 0c0-22.069645-17.828041-39.946804-39.824007-39.946804L193.465758 783.646863C171.468768 783.646863 153.642774 801.524023 153.642774 823.593667zM774.783497 368.186593 201.429127 368.186593c-26.390044 0-47.786353 21.472034-47.786353 47.938825 0 26.464745 21.396309 47.937802 47.786353 47.937802l573.35437 0c26.390044 0 47.787376-21.472034 47.787376-47.937802C822.571896 389.658627 801.17354 368.186593 774.783497 368.186593zM774.783497 575.917752 488.106312 575.917752l-79.622432 0-207.055776 0c-26.390044 0-47.786353 21.446451-47.786353 47.936779 0 26.465768 21.396309 47.938825 47.786353 47.938825l207.056799 0 79.622432 0 286.676162 0c26.390044 0 47.787376-21.471011 47.787376-47.938825C822.571896 597.364203 801.17354 575.917752 774.783497 575.917752zM727.02068 192.415334c-26.390044 0-47.787376-21.472034-47.787376-47.937802L679.233304 48.602951c0-26.465768 21.397333-47.937802 47.787376-47.937802 26.39209 0 47.76384 21.471011 47.76384 47.937802l0 95.874581C774.783497 170.944324 753.41277 192.415334 727.02068 192.415334zM488.106312 192.415334c-26.390044 0-47.787376-21.472034-47.787376-47.937802L440.318936 48.602951c0-26.465768 21.397333-47.937802 47.787376-47.937802 26.390044 0 47.787376 21.471011 47.787376 47.937802l0 95.874581C535.893688 170.944324 514.496355 192.415334 488.106312 192.415334zM249.217527 192.415334c-26.391067 0-47.788399-21.472034-47.788399-47.937802L201.429127 48.602951c0-26.465768 21.397333-47.937802 47.788399-47.937802 26.367531 0 47.762817 21.471011 47.762817 47.937802l0 95.874581C296.980343 170.944324 275.585057 192.415334 249.217527 192.415334z'
        },{
            name: '主食',
            classname: 'meal',
            to: '/login/signin',
            path: 'M597.663508 502.539027c46.27002 58.664653 74.117896 132.487795 74.117896 212.821162v17.362738h-27.91836c4.688302 8.906707 7.603807 18.889907 7.603807 29.618538 0 11.24979-3.158997 21.685801-8.280888 30.887262h28.612528v17.362738c0 57.797477-14.635193 99.552203-38.978055 129.830734l1.266589 15.728774h311.472016l50.071924-680.775682h28.369035v-57.675731h-210.042355c1.04232-107.29698-77.364465-195.528909-186.814433-196.10133-23.802479-0.121746-23.802479 36.788756 0 36.910502 89.795408 0.467762 150.595962 72.016169 149.901794 159.190828H550.994074v57.675731h28.420297l18.249137 227.163736z',
            path2: 'M616.136915 732.720791H31.182017c-6.68537 8.090792-10.867464 18.317486-10.867464 29.618538 0 11.892696 4.583643 22.640549 11.909783 30.887262h589.955042c7.32614-8.246713 11.909783-18.994566 11.909783-30.887262 0-11.303187-4.18423-21.546968-10.867463-29.618538h-7.084783zM327.200789 1002.40177c137.383279 0 254.92404-6.493139 303.415398-88.996581 15.295186-26.008865 23.785392-59.49979 23.785392-102.81586H0c0 180.718572 146.499304 191.812441 327.200789 191.812441zM38.004084 715.360189H654.41653c0-66.56535-20.000576-128.391137-54.134408-180.058579-58.545043-88.614255-158.930247-147.142211-273.083469-147.14221C146.482217 388.1594 0 534.658704 0 715.360189h38.004084z'
        },{
            name: '甜品',
            classname: 'dessert',
            to: '/login/signin',
            path: 'M941.056 377.856q20.48 66.56 20.48 135.168 0 93.184-35.328 174.592t-96.256 142.336-142.848 96.256-175.104 35.328-174.592-35.328-142.336-96.256-96.256-142.336-35.328-174.592 35.328-175.104 96.256-142.848 142.336-96.256 174.592-35.328q63.488 0 121.344 16.896t108.032 46.592q-17.408 21.504-27.648 48.128t-10.24 57.344q0 33.792 12.8 63.488t34.816 52.224 52.224 35.328 64 12.8q20.48 0 38.4-5.12t35.328-13.312zM349.184 197.632q-13.312 2.048-20.992 13.312t-5.632 24.576 13.312 20.48 24.576 5.12l62.464-11.264q13.312-2.048 20.992-12.8t5.632-24.064-12.8-20.48-24.064-5.12zM238.592 488.448q11.264-8.192 13.312-20.992t-6.144-24.064-20.48-13.312-23.552 6.144l-52.224 36.864q-11.264 8.192-13.824 20.48t5.632 23.552 20.992 13.824 24.064-5.632zM320.512 512q0 39.936 14.848 75.264t40.96 61.44 61.44 40.96 75.264 14.848 74.752-14.848 60.928-40.96 40.96-61.44 14.848-75.264-14.848-74.752-40.96-60.928-60.928-40.96-74.752-14.848-75.264 14.848-61.44 40.96-40.96 60.928-14.848 74.752zM748.544 818.176q12.288-5.12 17.408-17.408t0-24.576-17.408-17.408-24.576 0l-59.392 24.576q-12.288 5.12-17.408 17.408t0 24.576 17.408 17.408 24.576 0zM893.952 590.848q5.12-12.288 0-24.576t-17.408-17.408l-59.392-24.576q-12.288-5.12-24.576 0.512t-17.408 17.92 0.512 24.064 17.92 16.896l58.368 24.576q12.288 5.12 24.576 0t17.408-17.408z'
        },{
            name: '饮料',
            classname: 'drink',
            to: '/login/signin',
            path: 'M668.410628 44.408973V131.797788l61.823219-61.770289a121.740928 121.740928 0 0 0-61.823219-25.618526zM640.569007 131.797788V44.408973c-23.183707 2.646542-44.356043 11.856508-61.770289 25.671457l61.770289 61.717358zM775.542644 151.48806a121.370412 121.370412 0 0 0-25.671456-61.770289l-61.717358 61.770289h87.388814zM749.871188 241.1529c13.86788-17.361315 23.077846-38.586581 25.671456-61.770289h-87.388814l61.717358 61.770289z',
            path2: 'M654.542748 0a165.673524 165.673524 0 0 0-164.826631 151.48806H433.238912l-13.444433-66.586995C416.618629 57.747545 396.081464 19.690272 350.931459 23.554223c-41.65657 3.493435-142.595679 14.714773-146.936008 15.191151l4.604983 41.550708c1.058617-0.105862 104.697198-11.644784 145.718598-15.032358 19.372687-1.640856 23.183707 18.790448 23.924739 24.930425l12.332886 61.346841h-37.898481a27.841621 27.841621 0 0 0-27.841621 27.841621V996.158379c0 15.402874 12.491678 27.78869 27.841621 27.78869h287.943761a27.78869 27.78869 0 0 0 27.788691-27.78869V330.18257a165.514732 165.514732 0 0 0 151.54099-164.720769A165.620593 165.620593 0 0 0 654.542748 0z m-13.973741 302.340949v638.134188h-287.943761V179.382611h43.61501l26.835935 133.226921h-51.713429v607.381371h250.415797V312.609532h-156.145973l-26.783005-133.226921h201.772356l-0.05293 122.958338z m27.841621 0v-15.826321a121.740928 121.740928 0 0 0 61.823219-25.671456l-61.823219-61.770289v-19.690272a27.78869 27.78869 0 0 0-27.788691-27.841621h-19.743202l-61.770289-61.770288a119.994211 119.994211 0 0 0-25.565595 61.717358h-15.879251a137.62018 137.62018 0 1 1 150.747028 150.852889z'
        }
    ]

    

    return (
        <ul className='navibar-ul'>
            {list.map((item) => {
                return <li className={`nav_${item.classname} ` + `${item.name == selected?'selected':''}`} key={item.name} onClick={() => this.props.history.push(item.to)}>
                    <Link to={item.to} className='navbtn' onClick={() => dispatch(changeSelected({selected: item.name}))}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className='svgicon navicon' width="200" height="200">
                            <path d={item.path}></path>
                            {item.path2 != null?<path d={item.path2}></path>:null}
                        </svg>
                        {item.name}
                    </Link>
                </li>
            })}
        </ul>
    )

}

export default NaviBar
