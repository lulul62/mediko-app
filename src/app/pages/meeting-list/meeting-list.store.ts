import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { State, Action, StateContext } from '@ngxs/store';
import { Meeting } from 'src/app/models/Meeting';

export class GetAllMeetings {
    static readonly type = '[Meetings] Get all meetings';
}

export interface MeetingListStateModel {
    meetingList: Array<Meeting> | [];
}

@State<MeetingListStateModel>({
    name: 'meetingList',
    defaults: { meetingList: [] }
})

@Injectable()

export class MeetingsListState {

    constructor(private afs: AngularFirestore) {

    }

    @Action(GetAllMeetings)
    getAllMeetings(ctx: StateContext<MeetingListStateModel>) {
        console.log('je passe action')
        const state = ctx.getState();
        this.afs.collection('meeting').valueChanges().subscribe((meetings: any) => {
            ctx.setState({
                ...state,
                meetingList: meetings
            });
        })
    }
}