import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../types/status';
import { CommentCar, CommentsCar, CommentsState } from '../../types/comments';
import { getCarComments } from './getCarComments';
import { postComment } from './postComment';
import { patchComment } from './patchComment';
import { deleteComment } from './deleteComment';

const initialState: CommentsState = {
  status: Status.IDLE,
  statusChangeComment: Status.IDLE,
  comments: [],
  comment: null,
  deleteCommentText: '',
  error: null
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComment: (state) => state = {
      ...state,
      comment: null
    },
    clearMessageDelete: (state) => state = {
      ...state,
      deleteCommentText: ''
    },
  },
  selectors: {
    selectComment: (state) => state.comment,
    selectComments: (state) => state.comments,
    selectCommentsStatus: (state) => state.status,
    selectCommentDeleteMessage: (state) => state.deleteCommentText,
    selectCommentById: (state, id) =>
      state.comments.find((comment) => comment.id === id)
  },
  extraReducers: ({ addCase }) => {
    addCase(getCarComments.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    addCase(
      getCarComments.fulfilled,
      (state, { payload }: PayloadAction<CommentsCar>) => {
        state.status = Status.FULFILLED;
        state.comments = payload;
        state.error = null;
      }
    );
    addCase(
      getCarComments.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.status = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
        state.comments = [];
      }
    );
    addCase(postComment.pending, (state) => {
      state.statusChangeComment = Status.PENDING;
      state.error = null;
    });
    addCase(
      postComment.fulfilled,
      (state, { payload }: PayloadAction<CommentCar>) => {
        state.statusChangeComment = Status.FULFILLED;
        state.comment = payload;
        state.error = null;
      }
    );
    addCase(
      postComment.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusChangeComment = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );
    addCase(
      patchComment.pending, (state) => {
        state.statusChangeComment = Status.PENDING;
        state.error = null;
      }
    )
    addCase(
      patchComment.fulfilled, (state, { payload }: PayloadAction<CommentCar>) => {
        state.statusChangeComment = Status.FULFILLED;
        state.comment = payload;
        state.error = null;
      }
    )
    addCase(
      patchComment.rejected, (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusChangeComment = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    )
    addCase(deleteComment.pending, (state) => {
      state.statusChangeComment = Status.PENDING;
      state.error = null;
    })
    addCase(deleteComment.fulfilled, (state, {payload}: PayloadAction<string>) => {
      state.statusChangeComment = Status.FULFILLED;
      state.deleteCommentText = payload;
    })
    addCase(deleteComment.rejected, (state, {payload}: PayloadAction<string | undefined>) => {
      state.statusChangeComment = Status.REJECTED;
      if (payload) {
        state.error = payload;
      }
    })
  }
});

export const { selectComments, selectCommentsStatus, selectCommentById, selectComment, selectCommentDeleteMessage} =
  commentsSlice.selectors;

export const {clearComment, clearMessageDelete} = commentsSlice.actions;
export default commentsSlice.reducer;
